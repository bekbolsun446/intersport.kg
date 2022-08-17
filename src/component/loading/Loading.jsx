import React from 'react';
import classes from "./Loading.module.scss";

const Loading = () => {
    return (
        <div className={classes.loading}>
            <div className={classes.lds_ring}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loading;