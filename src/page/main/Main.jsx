import React, {useContext, useState} from 'react';
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

    return (
        <div className={classes.main}>
            <MainHero/>
            <MainNew newProducts={newProducts} link='catalog' title={'новинки'} linkTitle={'Смотреть все'}/>
            <MainNew newProducts={popularProducts} link='catalog' title={'ПОПУЛЯРНОЕ'} linkTitle={'Смотреть все'}/>
            <MainCategorySlide/>
            <MainNew newProducts={starProducts} link='catalog' title={'ЗВЕЗДЫ'} linkTitle={'Смотреть все'}/>
            <MainUseful/>
        </div>
    );
};

export default Main;
