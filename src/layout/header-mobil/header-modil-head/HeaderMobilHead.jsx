import React from 'react';
import classes from "./HeaderMobilHead.module.scss";
import {Link} from "react-router-dom";
import {AiOutlineHeart} from 'react-icons/ai'

const HeaderMobilHead = (props) => {
    const {toggleMobileHeader} = props;

    return (
        <div className={classes.headerMobilHead}>
            <Link onClick={toggleMobileHeader} to={'/'}>
                <img src="https://intersport.kg/static/new_static/img/svg/logo.svg"
                     className={classes.headerMobilHeadLogo}
                     alt=""/>
            </Link>
            <Link onClick={toggleMobileHeader} to={'/favorites'} className={classes.headerMobilHeadFavoritesLink}>
                <AiOutlineHeart className={classes.headerMobilHeadIcon}/>
            </Link>
        </div>
    );
};

export default HeaderMobilHead;