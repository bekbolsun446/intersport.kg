import React from 'react';
import classes from "./BasketProducts.module.scss";
import BasketProduct from "./basket-product/BasketProduct";

const BasketProducts = (props) => {
    const {} = props;
    return (
        <div className={classes.basket_products}>
            <BasketProduct/>
            <BasketProduct/>
            <BasketProduct/>
        </div>
    );
};

export default BasketProducts;