import React from 'react';
import items from './Data';
import AddToCart from './AddToCart';
import * as styles from './styles.module.css';

function DisplayItems() {
    return(
        <section className={styles.container}>
            <h1>
                Desserts
            </h1>
            {
                items.map((item) => {
                    const category = item.category;
                    const name = item.name;
                    const price = item.price;

                    return(
                        <div className={styles.item} key={item.name}>
                            <AddToCart item={item}/>
                            <div className={styles.item_details}>
                                <h2>
                                    {category}
                                </h2>
                                <h1>
                                    {name}
                                </h1>     
                                <p>
                                    ${price.toFixed(2)}
                                </p>                           
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default DisplayItems;