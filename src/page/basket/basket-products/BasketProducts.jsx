import React from 'react';
import classes from "./BasketProducts.module.scss";
import BasketProduct from "./basket-product/BasketProduct";

const BasketProducts = (props) => {
    const {basket} = props;
    return (
        <div className={classes.basket_products}>
            {basket.length > 0 && basket.map(bProduct =>
                <BasketProduct key={bProduct.id} bProduct={bProduct}/>
            )}
        </div>
    );
};

export default BasketProducts;