import CarouselImages from './componentsMain/CarouselImages/CarouselImages';
import Options from './componentsMain/Options/Options';
import MenuPizza from './componentsMain/MenuPizza/MenuPizza';
import QualitysPizzaria from './componentsMain/QualitysPizzaria/QualitysPizzaria';
import classes from './Main.module.css';
import React from 'react';

const Main = (props) => {
    return (
        <main>
            <CarouselImages />
            <Options />
            <MenuPizza sendOption={props.sendOption} />
            <div className={classes.banner}>
                <img src={require('../../assets/banner/banner.jpg')} />
            </div>
            <QualitysPizzaria />
        </main>
    );
};

export default React.memo(Main);
