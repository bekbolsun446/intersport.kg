import React from 'react';
import classes from "./Basket.module.scss";
import PageHead from "../../component/page-head/PageHead";

const Basket = () => {

    const prevPages = [{
        id: 1,
        link: '/',
        name: 'Главная'
    }]
    return (
        <div className={classes.basket}>
            <PageHead currentPage={'Мой заказ'} prevPages={prevPages}/>

        </div>
    );
};

export default Basket;