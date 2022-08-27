import React, {useContext} from 'react';
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import {Outlet} from "react-router-dom";
import HeaderWarn from "../layout/headerWarn/HeaderWarn";
import ContactContent from "../layout/contact-content/ContactContent";
import classes from "./Content.module.scss";
import HeaderMobil from "../layout/header-mobil/HeaderMobil";
import MobileMenu from "../layout/mobile-menu/MobileMenu";
import Register from "../component/register/Register";
import {MyContext} from "../provider/Provider";
import MobileSearch from "../layout/mobile-search/MobileSearch";


const Content = (props) => {

    const context = useContext(MyContext)
    const {showMobileSearch, setShowMobileSearch} = context.mobileSearch
    return (
        <>
            <HeaderWarn className={classes.headerWarnLanding}/>
            <Header/>
            <div className='container'>
                <Outlet/>
            </div>
            <Footer/>
            <ContactContent/>
            <HeaderMobil/>
            <MobileMenu/>
            <Register/>
            {showMobileSearch &&
                <MobileSearch/>
            }
        </>
    );
};

export default Content;