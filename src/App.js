import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import CartPage from './components/CartPage/CartPage';
import { Fragment, useEffect, useState } from 'react';

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const [page, setPage] = useState(true);

    const sendOption = (props) => {
        setPizzas((previousState) => {
            return [props, ...previousState];
        });
    };

    useEffect(() => {
        localStorage.setItem('pizzas', JSON.stringify(pizzas));
    }, [pizzas]);

    const toggleCart = () => {
        setPage((previousState) => {
            return !previousState;
        });
    };

    return (
        <Fragment>
            {page && <Header pizzas={pizzas} toggleCart={toggleCart}></Header>}
            {page && <Main sendOption={sendOption}></Main>}
            {page && <Footer />}
            {!page && <CartPage />}
        </Fragment>
    );
};

export default Home;
