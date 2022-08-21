import React from 'react';
import classes from "./Favorites.scss";
import PageHead from "../../component/page-head/PageHead";

const Favorites = () => {


    return (
        <div className={classes.favorites}>
            <PageHead currentPage={'Favorites'}/>
        </div>
    );
};

export default Favorites;