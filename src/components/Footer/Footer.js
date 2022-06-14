import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.inputsImages}>
                <button>
                    <img src={require('../../assets/icons/facebook.png')} alt={'facebook'} />
                </button>
                <button>
                    <img src={require('../../assets/icons/instagram.png')} alt={'instagram'} />
                </button>
                <button>
                    <img src={require('../../assets/icons/twitter.png')} alt={'twitter'} />
                </button>
                <button>
                    <img src={require('../../assets/icons/whatsapp.png')} alt={'whatsapp'} />
                </button>
            </div>
            <span className={classes.logo}>Pizzaria</span>
            <div className={classes.contact}>
                <div className={classes.information}>
                    <span>Pizzaria Restaurant</span>
                    <span>901-947 Lest Drive, Massachussets, TX 757, USA </span>
                    <span>Telephone: +1 555 123 456 789 </span>
                    <span>Fax: +1 555 2342</span>
                </div>
                <span className={classes.rights}>Copyright © 2022. All rights reserved.</span>
            </div>
            <button className={classes.btnMap}>
                <img src={require('../../assets/icons/local.png')} />
                Find us on Map
            </button>
        </footer>
    );
};

export default Footer;
