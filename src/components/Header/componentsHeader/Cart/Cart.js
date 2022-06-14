import classes from './Cart.module.css';
import { useEffect, useState } from 'react';

const Cart = (props) => {
    const [pizzas, setpizzas] = useState([]);
    const [countPizzas, setCountPizzas] = useState(0);

    useEffect(() => {
        setpizzas(props.pizzas);
        setCountPizzas(props.pizzas.length);
    }, [props.pizzas]);

    const handleCart = () => {
        props.toggleCart();
    };

    return (
        <button className={classes.containerCart} onClick={handleCart}>
            <span>Go to Your Cart</span>
            <input type={'image'} src={require('../../../../assets/icons/shopping-cart.png')} alt={'cart'} />
            <span>{countPizzas}</span>
        </button>
    );
};

export default Cart;
