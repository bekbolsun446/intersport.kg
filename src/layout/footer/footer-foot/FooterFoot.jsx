import React from 'react';
import classes from "./FooterFoot.module.scss";

const FooterFoot = () => {
    return (
        <div className={classes.footer_foot}>
            <span className={classes.footer_logo}>Intersport 2022</span>
            <a href="#" className={classes.footer_foot_link}>
                Made by
                <span>Bekbolsun Samaganov</span>
            </a>
        </div>
    );
};

export default FooterFoot;