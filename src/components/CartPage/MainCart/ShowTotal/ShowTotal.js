import classes from './ShowTotal.module.css';
import { useState, useEffect } from 'react';

const ShowTotal = (props) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(props.total);
    }, [props.total]);

    return (
        <div className={classes.container}>
            <span className={classes.title}>Cart Totals</span>
            <div>
                <div className={classes.subTotal}>
                    <span>Subtotal</span>
                    <span>${props.total}</span>
                </div>
                <hr />
                <div className={classes.total}>
                    <span>Total</span>
                    <span>${total}</span>
                </div>
            </div>
        </div>
    );
};

export default ShowTotal;
