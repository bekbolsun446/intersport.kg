import React from 'react';
import classes from "./BasketAside.module.scss";
import MyButton from "../../../component/UI/my_button/MyButton";

const BasketAside = (props) => {
    const {allSum, allSale, allProductsCount, allSumWithoutSale} = props;

    return (
        <div className={classes.basket_aside}>
            <p className={classes.basket_asideTitle}>Итог заказа</p>
            <p className={classes.basket_asideCount}>
                Товаров:
                <span>{allProductsCount}</span>
            </p>
            <p className={classes.basket_asideSum}>
                Сумма:
                <span>{allSumWithoutSale} c</span>
            </p>
            <p className={classes.basket_asideSale}>
                Скидка:
                <span>- {allSale} с</span>
            </p>
            <p className={classes.basket_asideDelivery}>
                Доставка:
                <span>Уточнить у оператора</span>
            </p>
            <p className={classes.basket_asideAllSum}>
                Итого:
                <span>{allSum} с</span>
            </p>
            <MyButton>
                ОФОРМИТЬ ЗАКАЗ
            </MyButton>
        </div>
    );
};

export default BasketAside;