import React from 'react';
import classes from "./NotFoundPage.module.scss";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className={classes.not_found}>
            <h1 className={classes.not_foundTitle}>404</h1>
            <div className={classes.cloak__wrapper}>
                <div className={classes.cloak__container}>
                    <div className={classes.cloak}></div>
                </div>
            </div>
            <div className={classes.info}>
                <h2>We can't find that page</h2>
                <p className={classes.not_foundParagraff}>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's
                    behalf.</p><Link className={classes.not_foundLink} to="/" >Home</Link>
            </div>
        </div>

    );
};

export default NotFoundPage;