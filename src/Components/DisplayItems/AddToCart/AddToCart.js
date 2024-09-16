import React from 'react';
import ItemImage from './ItemImage';
import Quantity from './Quantity';
import icons from './icons';
import { addToCartVariant } from './Variants';
import {useSelector, useDispatch} from 'react-redux';
import * as styles from './styles.module.css';
import {motion, AnimatePresence} from 'framer-motion';

function AddToCart({item}){
    const itemExistsInCart = useSelector(state => state.cart.filter(currentItem => currentItem.name === item.name)[0]?.name);    
    const dispatch = useDispatch();

    const handleButton = () => {
        dispatch({type: 'ADD_ITEM', item: {
            name: item.name,
            quantity: 1,
            price: item.price,
            thumbnail: item.image.thumbnail
        }})
    }


    return (
        <div className={styles.container}>
            <ItemImage images={item.image} selected={itemExistsInCart}/>            
            <AnimatePresence initial={false}>
                {!itemExistsInCart ?              
                    <motion.button 
                        variants={addToCartVariant} 
                        initial='hidden' 
                        animate='show' 
                        exit='exit' 
                        className={styles.addToCart} 
                        onClick={handleButton} 
                        key={1}
                        >
                            <img src={icons['cart']}/> 
                            Add to Cart
                    </motion.button> : 
                    <Quantity item={item}/>
                }  
            </AnimatePresence>
        </div>
    )
    
}

export default AddToCart;