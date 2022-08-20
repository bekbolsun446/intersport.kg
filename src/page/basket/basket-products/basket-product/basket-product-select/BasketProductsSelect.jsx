import React from 'react';
import classes from "./BasketProductsSelect.module.scss";

const BasketProductsSelect = (props) => {
    const {} = props
    return (
        <div className={classes.basket_product_select}>
            <span className={classes.basket_product_selectName}>
                Размер:
                <span>XS</span>
            </span>
        </div>
    );
};

export default BasketProductsSelect;