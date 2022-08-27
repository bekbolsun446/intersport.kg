import React, {useContext, useEffect, useState} from 'react';
import classes from "./MobileMenu.module.scss";
import {ImSearch} from 'react-icons/im';
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgClose} from 'react-icons/cg';
import {ShoppingOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {MyContext} from "../../provider/Provider";
import {GrClose} from 'react-icons/gr'
import {gsap} from "gsap";

const MobileMenu = (props) => {
    const context = useContext(MyContext);
    const allProductsCount = context.allProductsCount;
    const isShowHeader = context.mobileHeader.isShownHeader;
    const setIsShownHeader = context.mobileHeader.setIsShownHeader;
    const toggleMobileHeader = context.mobileHeader.toggleMobileHeader;
    const {showMobileSearch, setShowMobileSearch} = context.mobileSearch

    const toggleMobileSearch = (e) => {
        e.preventDefault();
        if (showMobileSearch == false) {
            gsap.to('.header_mobile', {left: '-100%', duration: .1})
            gsap.to(`.headerMenuArrow`, {rotation: 0, duration: .2})
            gsap.to(`.header_mobil_subcategoryIcon`, {rotation: 0, duration: .2})
            setIsShownHeader(false)
            setShowMobileSearch(!showMobileSearch)
        }
        setShowMobileSearch(!showMobileSearch)
    }

    const closeMobileHeader = () => {
        gsap.to('.header_mobile', {left: '-100%', duration: .1})
        gsap.to(`.headerMenuArrow`, {rotation: 0, duration: .2})
        gsap.to(`.header_mobil_subcategoryIcon`, {rotation: 0, duration: .2})
        setIsShownHeader(false)
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
                <Link onClick={()=> closeMobileHeader()} to={'/basket'} className={classes.mobile_basket}>
                    <ShoppingOutlined className={classes.mobile_basketIcon}/>
                    <span>{allProductsCount}</span>
                </Link>
            </div>
        </div>
    );
};

export default MobileMenu;