import classes from './Options.module.css';

const Options = () => {
    return (
        <div className={classes.container}>
            <div className={classes.containerOne}>
                <img src={require('../../../../assets/imagesOptions/d1.png')} alt="Promotion pizza"></img>
            </div>
            <div className={classes.containerTwo}>
                <img src={require('../../../../assets/imagesOptions/d2.png')} alt="Promotion pizza"></img>
            </div>
            <div className={classes.containerThree}>
                <img src={require('../../../../assets/imagesOptions/d3.png')} alt="Promotion pizza"></img>
            </div>
        </div>
    );
};

export default Options;
