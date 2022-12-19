import React from 'react';
import classes from "./FooterFoot.module.scss";

const FooterFoot = () => {
    return (
        <div className={classes.footer_foot}>
            <span className={classes.footer_logo}>Intersport 2022</span>
            <a
                href="https://www.instagram.com/aktan.asankulv/"
                target={'_blank'}
                className={classes.footer_foot_link}
            >
                Made by
                <span>Aktan Asankulov</span>
            </a>
        </div>
    );
};

export default FooterFoot;