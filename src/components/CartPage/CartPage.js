import { Fragment } from 'react';
import Footer from '../Footer/Footer';
import MainCart from './MainCart/MainCart';
import Header from '../Header/Header';

const CartPage = () => {
    return (
        <Fragment>
            <Header />
            <MainCart />
            <Footer />
        </Fragment>
    );
};

export default CartPage;
