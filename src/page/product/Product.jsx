import React, {useState, useEffect, useContext} from 'react';
import MainHead from "../main/main_head/MainHead";
import 'antd/dist/antd.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Product.module.scss";
import {useParams} from "react-router-dom";
import {MyContext} from "../../provider/Provider";
import ProductAbout from "./product-about/ProductAbout";
import ProductContent from "./product-content/ProductContent";
import PageHead from "../../component/page-head/PageHead";

const Product = (props) => {
    let {name} = useParams();

    const context = useContext(MyContext)
    const product = context.products.filter(product => product.name == name)[0]
    const basket = context.basket

    const {error, setError} = context.error;
    const {isLoaded, setIsLoaded} = context.isLoaded

    const prevPages = [
        {
            id: 2,
            link: '/catalog',
            name: 'Каталог'
        }
    ]

    if (error) {
        return (
            <h1>Error: {error.message}</h1>
        )
    } else if (!isLoaded) {
        return (<h1>Loading...</h1>)
    } else {
        return (
            <div className='product_'>
                <PageHead currentPage={product.name} prevPages={prevPages}/>
                <MainHead link='catalog' linkTitle='ПЕРЕЙТИ В КАТАЛОГ'/>
                <div key={product.id} className={classes.product}>
                    <ProductContent product={product}/>
                    <ProductAbout product={product} contextBasket={basket}/>
                </div>
            </div>
        );
    }

};

export default Product;