import classes from './ShowItems.module.css';
import { Fragment, useState } from 'react';

const ShowItems = (props) => {
    const pizzas = localStorage.getItem('pizzas');
    const oldArray = JSON.parse(pizzas);
    const [check, setChecked] = useState(true);

    const [newArray, setNewArray] = useState(
        oldArray.filter(
            (value, index, self) =>
                index ===
                self.findIndex((t) => {
                    if (t.image === value.image) {
                        if (t.price === value.price) {
                            return true;
                        }
                    }
                })
        )
    );

    const checkIfWasRepetead = (image, price) => {
        let isRepetead = 0;
        let total = 0;
        oldArray.forEach((item) => {
            let newStr = item.price.replace('$', '');
            total += parseInt(newStr);
            if (item.image === image && item.price === price) {
                isRepetead += 1;
            }
        });
        props.showTotalValue(total);
        return isRepetead;
    };

    const removeItem = (image, price) => {
        setChecked(false);
        let total = 0;
        let updatedArray = null;
        setNewArray((previousArray) => {
            updatedArray = previousArray.filter((item) => {
                return item.image !== image || item.price !== price;
            });
            if (updatedArray.length > 0) {
                updatedArray.forEach((item) => {
                    let newStr = item.price.replace('$', '');
                    total += parseInt(newStr);
                });
            }
            props.showTotalValue(total);
            return updatedArray;
        });
    };

    return (
        <div className={classes.container}>
            <div className={classes.aboutProduct}>
                <div>
                    <span>Product</span>
                </div>
                <div className={classes.quantityPrice}>
                    <span>Price</span>
                    <span>Quantity</span>
                </div>
            </div>
            <hr />
            {newArray.map((pizza, index) => {
                return (
                    <Fragment>
                        <div className={classes.containerCart} key={pizza.image}>
                            <div className={classes.containerProduct}>
                                <button
                                    onClick={() => {
                                        removeItem(pizza.image, pizza.price);
                                    }}
                                >
                                    X
                                </button>
                                <img src={require(`../../../../assets/pizzasTypesImages/${pizza.image}.jpg`)} />
                                <div className={classes.description}>
                                    <span>{pizza.title}</span>
                                    <span>{pizza.description}</span>
                                    <span>{pizza.size}</span>
                                </div>
                            </div>
                            <div className={classes.containerPrice}>
                                <span>{pizza.price}</span>
                                <div className={classes.containerAdd}>
                                    <input
                                        type={'number'}
                                        readonly="readonly"
                                        defaultValue={check && checkIfWasRepetead(pizza.image, pizza.price)}
                                    />
                                </div>
                            </div>
                        </div>
                        <hr />
                    </Fragment>
                );
            })}
        </div>
    );
};

export default ShowItems;
