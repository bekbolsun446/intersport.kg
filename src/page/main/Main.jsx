import React, {useContext, useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Main.module.scss";
import './main.scss'
import MainNew from "./main_new/MainNew";
import MainHero from "./main-hero/MainHero";
import MainCategorySlide from "./main-category-slide/MainCategorySlide";
import MainUseful from "./main-useful/MainUseful";
import {MyContext} from "../../provider/Provider";

const Main = (props) => {
    const context = useContext(MyContext)
    const products = context.products

    const newProducts = products.filter(product => product.isNew === true);
    const starProducts = products.filter(product => product.isStar === true)
    const popularProducts = products.filter(product => product.isPopular === true)

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <div className={classes.main}>
            <MainHero/>
            <MainNew
                newProducts={newProducts}
                link='catalog/type=НОВИНКИ'
                title={'новинки'}
                linkTitle={'Смотреть все'}
            />
            <MainNew
                newProducts={popularProducts}
                link='catalog/type=ПОПУЛЯРНОЕ'
                title={'ПОПУЛЯРНОЕ'}
                linkTitle={'Смотреть все'}
            />
            <MainCategorySlide/>
            <MainNew
                newProducts={starProducts}
                link='catalog/type=ЗВЕЗДЫ'
                title={'ЗВЕЗДЫ'}
                linkTitle={'Смотреть все'}
            />
            <MainUseful/>
        </div>
    );
};

export default Main;
