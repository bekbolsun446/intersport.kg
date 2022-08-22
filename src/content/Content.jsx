import React from 'react';
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import {Outlet} from "react-router-dom";
import HeaderWarn from "../layout/headerWarn/HeaderWarn";
import ContactContent from "../layout/contact-content/ContactContent";
import classes from "./Content.module.scss";
import HeaderMobil from "../layout/header-mobil/HeaderMobil";
import MobileMenu from "../layout/mobile-menu/MobileMenu";


const Content = (props) => {

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
        </>
    );
};

export default Content;