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

const Product = (props) => {
    let {name} = useParams();

    const context = useContext(MyContext)
    const product = context.products.filter(product => product.name == name)[0]
    const {error, setError} = context.error;
    const {isLoaded, setIsLoaded} = context.isLoaded


    const count = [];
    for (let i = 1; i < product.count + 1; i++) {
        count.push(i)
    }

    if (error) {
        return (
            <h1>Error: {error.message}</h1>
        )
    } else if (!isLoaded) {
        return (<h1>Loading...</h1>)
    } else {
        return (
            <div className='product_'>
                <MainHead title='Product' link='catalog' linkTitle='ПЕРЕЙТИ В КАТАЛОГ'/>
                {/*{products.map(product =>*/}
                <div key={product.id} className={classes.product}>
                    <ProductContent product={product}/>
                    <ProductAbout product={product} count={count && count}/>
                </div>
                {/*)*/}
                {/*}*/}
            </div>
        );
    }

};

export default Product;