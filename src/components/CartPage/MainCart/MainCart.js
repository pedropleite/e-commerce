import classes from './MainCart.module.css';
import ShowItems from './ShowItems/ShowItems';
import ShowTotal from './ShowTotal/ShowTotal';
import { useState } from 'react';

const MainCart = () => {
    const [total, setTotal] = useState(0);

    const showTotalValue = (value) => {
        console.log(value);
        setTotal(value);
    };

    return (
        <main className={classes.mainCart}>
            <div className={classes.throughCheckout}>
                <div className={classes.containerCheckout}>
                    <div className={classes.showCheckout1}>1</div>
                    <span>Shopping Cart</span>
                </div>
                <div className={classes.containerCheckout}>
                    <div className={classes.showCheckout2}>2</div>
                    <span>Checkout</span>
                </div>
                <div className={classes.containerCheckout}>
                    <div className={classes.showCheckout3}>3</div>
                    <span>Order complete</span>
                </div>
            </div>
            <ShowItems showTotalValue={showTotalValue} />
            <div className={classes.containerBTN}>
                <div className={classes.containerBTNCoupon}>
                    <input type={'text'} />
                    <button>Apply Coupon</button>
                </div>
                <ShowTotal total={total} />
            </div>
            <div className={classes.containerBTNCheckout}>
                <button>Proceed to Checkout</button>
            </div>
        </main>
    );
};

export default MainCart;
