import React, {useContext, useEffect, useState} from 'react';
import classes from "./MobileMenu.module.scss";
import {ImSearch} from 'react-icons/im';
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgClose} from 'react-icons/cg';
import {ShoppingOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {MyContext} from "../../provider/Provider";
import {GrClose} from 'react-icons/gr'

const MobileMenu = (props) => {
    const context = useContext(MyContext);
    const allProductsCount = context.allProductsCount;
    const isShowHeader = context.mobileHeader.isShownHeader;
    const toggleMobileHeader = context.mobileHeader.toggleMobileHeader;
    const {showMobileSearch, setShowMobileSearch} = context.mobileSearch

    const toggleMobileSearch = (e) => {
        e.preventDefault();
        if (showMobileSearch == false) {
            toggleMobileHeader();
            setShowMobileSearch(!showMobileSearch)
        }
        setShowMobileSearch(!showMobileSearch)
    }

    return (
        <div className={classes.mobile_menu_wrapper}>
            <div className={classes.mobile_menu}>
                <div className={classes.search_mobile}>
                    {showMobileSearch ?
                        <GrClose
                            className={classes.mobile_menu_searchIcon}
                            onClick={toggleMobileSearch}
                        />
                        :
                        <ImSearch
                            className={classes.mobile_menu_searchIcon}
                            onClick={toggleMobileSearch}
                        />
                    }
                </div>
                <div
                    style={isShowHeader ? {background: '#004EB2'} : {}}
                    onClick={toggleMobileHeader}
                    className={classes.menu_hamburger}
                >
                    {isShowHeader ?
                        <CgClose style={isShowHeader ? {color: 'white'} : {}} className={classes.menu_hamburgerIcon}/>
                        :
                        <GiHamburgerMenu className={classes.menu_hamburgerIcon}/>
                    }
                </div>
                <Link to={'/basket'} className={classes.mobile_basket}>
                    <ShoppingOutlined className={classes.mobile_basketIcon}/>
                    <span>{allProductsCount}</span>
                </Link>
            </div>
        </div>
    );
};

export default MobileMenu;