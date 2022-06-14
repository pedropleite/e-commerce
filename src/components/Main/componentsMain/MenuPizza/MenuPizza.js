import classes from './MenuPizza.module.css';
import CardPizza from '../CardPizza/CardPizza';
import { useEffect, useState, useRef } from 'react';

const MenuPizza = (props) => {
    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3000/static/shoes.json')
            .then((response) => response.json())
            .then(setData);
    }, []);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <button onClick={handleLeftClick}>
                    <img src={require('../../../../assets/icons/216151_right_chevron_icon.png')} />
                </button>
                <span>Pizza Sets</span>
                <button onClick={handleRightClick}>
                    <img src={require('../../../../assets/icons/216151_right_chevron_icon.png')} />
                </button>
            </div>
            <hr></hr>
            <div className={classes.cardContainer} ref={carousel}>
                {data.map((item) => {
                    return (
                        <CardPizza
                            key={Math.random().toString(36)}
                            title={item.title}
                            sendOption={props.sendOption}
                            src={require(`../../../../assets/pizzasTypesImages/${item.image}.jpg`)}
                            description={item.description}
                            image={item.image}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default MenuPizza;
