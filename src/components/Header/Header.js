import Cart from './componentsHeader/Cart/Cart';
import classes from './Header.module.css';
import { useState } from 'react';

const Header = (props) => {
    const [mode, setMode] = useState(false);

    const toggleMode = () => {
        setMode((previousState) => {
            return !previousState;
        });
    };

    return (
        <header>
            <nav className={classes.container}>
                <div className={classes.logo}>
                    <span>Pizzaria</span>
                </div>
                <div className={`${classes.navBar} ${mode ? classes.activeNavBar : classes.notActiveNavBar}`}>
                    <div className={classes.span}>
                        <span>Pages</span>
                    </div>
                    <div className={classes.span}>
                        <span>News</span>
                    </div>
                    <div className={classes.span}>
                        <span>Location</span>
                    </div>
                    <div className={classes.span}>
                        <span>History</span>
                    </div>
                    <div className={classes.containerOrder}>
                        <span>Call and Order</span>
                        <span>555 123 456 789</span>
                    </div>
                </div>
                <div className={mode ? classes.active : classes.notActive} onClick={toggleMode}>
                    <div className={classes.hamburguer}></div>
                </div>
                <div>{props.pizzas && <Cart pizzas={props.pizzas} toggleCart={props.toggleCart}></Cart>}</div>
            </nav>
        </header>
    );
};

export default Header;
