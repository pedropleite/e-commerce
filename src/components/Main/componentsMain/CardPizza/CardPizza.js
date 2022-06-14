import classes from './CardPizza.module.css';
import { Fragment } from 'react';
import './buttonStyles.css';

const CardPizza = (props) => {
    const checkedOption1 = (e) => {
        if (e.target.className === 'checked') {
            e.target.className = 'notPress';
        } else {
            e.target.className = 'checked';
        }
    };

    const checkedOption2 = (e) => {
        if (e.target.className === 'checked') {
            e.target.className = 'notPress';
        } else {
            e.target.className = 'checked';
        }
    };

    const addItem = (e) => {
        const marked1 = e.target.parentNode.previousElementSibling.children[0].children[0].className;
        const marked2 = e.target.parentNode.previousElementSibling.children[1].children[0].className;

        if (marked1 === 'checked' && marked2 === 'checked') {
            alert('Choose a pizza size');
        } else if (marked1 === 'checked') {
            props.sendOption({
                title: props.title,
                description: props.description,
                price: '$19',
                size: '25CM',
                image: props.image,
            });
        } else if (marked2 === 'checked') {
            props.sendOption({
                title: props.title,
                description: props.description,
                price: '$25',
                size: '30CM',
                image: props.image,
            });
        } else {
            alert('Press a button');
        }
    };

    return (
        <Fragment>
            <div className={classes.card}>
                <div>
                    <img src={props.src} alt={' pizza'}></img>
                </div>
                <div>
                    <span className={classes.pizzaTitle}>{props.title}</span>
                </div>
                <div className={classes.descriptionContainer}>
                    <span className={classes.pizzaDescription}>{props.description}</span>
                </div>
                <div>
                    <span className={classes.sizeTitle}>Pick Size</span>
                </div>
                <div className={classes.sizeOptions}>
                    <div>
                        <button onClick={checkedOption1} className="notPress">
                            25CM
                        </button>
                        <span>$19</span>
                    </div>
                    <div>
                        <button onClick={checkedOption2} className="notPress">
                            30CM
                        </button>
                        <span>$25</span>
                    </div>
                </div>
                <div className={`${classes.cardButton}`}>
                    <input type="image" src={require('../../../../assets/icons/check-mark.png')} alt={'Promotion pizza'}></input>
                    <span onClick={addItem}>Add to Cart</span>
                </div>
            </div>
        </Fragment>
    );
};

export default CardPizza;
