import React from 'react';
import classes from "./BasketProduct.module.scss";
import {FiHeart} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'

const BasketProduct = (props) => {
    const {} = props;

    return (
        <div className={classes.basket_product}>
            <div className={classes.product_content}>
                <div className={classes.basket_product_img}>
                    <img
                        src="https://inter-sport.s3.amazonaws.com/products/CZ8338/black_010/CZ8338-1_resized_400X400.png"
                        alt=""/>
                </div>
                <div className={classes.basket_product_about}>
                    <p className={classes.basket_productBrand}>Nike</p>
                    <p className={classes.basket_productName}>Толстовка Nike W NSW MLNM ESSNTL FLC FZ HDY</p>
                    <div className={classes.basket_product_about_color}>
                        <p className={classes.basket_product_about_colorName}>
                            Цвета:
                            <span>Черный</span>
                        </p>
                        <div className={classes.basket_product_about_colors}>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className={classes.basket_product_about_foot}>
                        <p className={classes.basket_product_size}>
                            Размер:
                            <span>XS</span>
                        </p>
                        <p className={classes.basket_product_count}>
                            Количество:
                            <span>4</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.basket_products_price_content}>
                <p className={classes.basket_productPrice}>11990c</p>
                <div className={classes.basket_products_btns}>
                    <FiHeart className={classes.basket_products_btn}/>
                    <p>|</p>
                    <AiOutlineDelete className={classes.basket_products_btn}/>
                </div>
            </div>
        </div>
    );
};

export default BasketProduct;