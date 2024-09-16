import React, {useState, useEffect, useMemo} from 'react';
import { useDispatch } from 'react-redux';
import * as styles from './styles.module.css';
import {motion} from 'framer-motion';
import {buttonVariant} from './Variants';
import store from '~/Store';

function Quantity({item}) {
    const prevQuantity = useMemo(() => {
        const cart = store.getState().cart;
        return cart.filter(currentItem => currentItem.name === item.name)[0]?.quantity;
    }, [])
    const [quantity, setQuantity] = useState(prevQuantity ? prevQuantity : 1);
    const dispatch = useDispatch();

    const handleDecrement = () => { 
        setQuantity(quantity - 1);
    }

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    }

    useEffect(() => {
        if(quantity <= 0){
            dispatch({
                type: 'REMOVE_ITEM',
                item: {
                    name: item.name
                }
            });         
        }
        else
            dispatch({
                type: 'UPDATE_ITEM',
                item: {
                    name: item.name,
                    quantity
                }
            })
    }, [quantity])


    return(
        <motion.div variants={buttonVariant} initial='hidden' animate='show' exit='exit' className={styles.quantity} key={2}>
            <button onClick={handleDecrement}>
                <div className={styles.minus}/>
            </button>
            {quantity}
            <button onClick={handleIncrement}>
                <div className={styles.plus}/>
            </button>
        </motion.div>
    )
}

export default Quantity;