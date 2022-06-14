import classes from './QualitysPizzaria.module.css';

const QualitysPizzaria = () => {
    return (
        <div className={classes.container}>
            <div>
                <img src={require('../../../../assets/icons/food-safe.png')} />
                <span>Praesent pulvinar neque pellentesque mattis pretium.</span>
            </div>
            <div>
                <img src={require('../../../../assets/icons/esboco-do-chef.png')} />
                <span>Praesent pulvinar neque pellentesque mattis pretium.</span>
            </div>
            <div>
                <img src={require('../../../../assets/icons/hora-do-relogio.png')} />
                <span>Praesent pulvinar neque pellentesque mattis pretium.</span>
            </div>
            <div>
                <img src={require('../../../../assets/icons/legumes.png')} />
                <span>Praesent pulvinar neque pellentesque mattis pretium.</span>
            </div>
        </div>
    );
};

export default QualitysPizzaria;
