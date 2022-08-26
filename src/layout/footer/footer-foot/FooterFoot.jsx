import React from 'react';
import classes from "./FooterFoot.module.scss";

const FooterFoot = () => {
    return (
        <div className={classes.footer_foot}>
            <span className={classes.footer_logo}>Intersport 2022</span>
            <a
                href="https://www.instagram.com/bekbolsun_samaganov/"
                target={'_blank'}
                className={classes.footer_foot_link}
            >
                Made by
                <span>Bekbolsun Samaganov</span>
            </a>
        </div>
    );
};

export default FooterFoot;