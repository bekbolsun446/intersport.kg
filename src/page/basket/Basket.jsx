import React, {useContext} from 'react';
import classes from "./Basket.module.scss";
import PageHead from "../../component/page-head/PageHead";
import MyButton from "../../component/UI/my_button/MyButton";
import BasketProducts from "./basket-products/BasketProducts";
import BasketAside from "./basket-aside/BasketAside";
import {MyContext} from "../../provider/Provider";

const Basket = (props) => {
    const {} = props;
    const context = useContext(MyContext)
    const {basket, setBasket} = context.basket
    const prevPages = [{
        id: 1,
        link: '/',
        name: 'Главная'
    }]
    return (
        <div className={classes.basket}>
            <PageHead currentPage={'Мой заказ'} prevPages={prevPages}/>
            <h2 className={classes.basketTitle}>
                Мой заказ |
                <span className={classes.basketTitleSum}>Итого: 11990</span>
            </h2>
            <div className={classes.basket_content}>
                <BasketProducts basket={basket}/>
                <BasketAside/>
            </div>
        </div>
    );
};

export default Basket;