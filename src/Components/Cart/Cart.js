import React from 'react';
import icons from './icons';
import images from './images';
import {useSelector, useDispatch} from 'react-redux';
import * as styles from './styles.module.css';

function Cart(){
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (name) => {
        dispatch({
            type: 'REMOVE_ITEM',
            item: {
                name
            }
        })
    }

    return(
        <section className={styles.container}>
            <h1>
                Your Cart {`(${cart.length})`}
            </h1>
            {cart.length !== 0 ?
            <>
                <div className={styles.items}>
                    {cart.map((item, i) => {
                        const name = item.name;
                        const quantity = item.quantity;
                        const price = item.price;
                        const total = quantity * price;

                        return(
                            <div key={name}>
                                <div className={styles.item}>
                                    <h1 className={styles.item_name}>
                                        {name}
                                    </h1>
                                    <div className={styles.item_details}>
                                        <p>
                                            {quantity}x
                                        </p>
                                        <p>
                                            @ ${price}
                                        </p>
                                        <p>
                                            ${total.toFixed(2)}
                                        </p>
                                    </div>
                                    <button className={styles.item_remove} onClick={() => handleRemove(name)}> 
                                        <div className={styles.remove}/>
                                    </button>
                                </div>  
                                {i !== cart.length - 1 && <div className={styles.separator}></div>}                          
                            </div>
                        )
                    })}
                </div>
                <div className={styles.separator}></div>
                <div className={styles.total}>
                    Order Total
                    <p>
                        ${cart.reduce((acc, item) => {
                            return acc + (item.price * item.quantity)
                        }, 0).toFixed(2)}
                    </p>
                </div>
                <div className={styles.messageBox}>
                    <img src={icons['carbonNeutral']}/>
                    <p className={styles.message}>
                        This is a <strong>carbon-neutral</strong> delivery
                    </p>                
                </div>
                <button className={styles.confirm}>
                    Confirm Order
                </button>
            </> : 
                <div className={styles.emptyCart}>
                    <img src={images['empty']}/>
                    <p>
                        Your added items will appear here
                    </p>
                </div>
            }

        </section>
    )
}
export default Cart;