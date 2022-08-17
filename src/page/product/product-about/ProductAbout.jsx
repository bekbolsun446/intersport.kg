import React from 'react';
import classes from "./ProductAbout.module.scss";
import MyButton from "../../../component/UI/my_button/MyButton";
import {BsArrowRight, BsHeart} from 'react-icons/bs';

const ProductAbout = (props) => {
    const {product, count} = props
    return (
        <div className={classes.product_about}>
            <p className={classes.productBrand}>{product.brand}</p>
            <h4 className={classes.product_name}>{product.name}</h4>
            <div className={classes.product_price_content}>
                <p className={classes.productNewPrice}>{product.newPrice} c</p>
                <p className={classes.productOldPrice}>{product.oldPrice} c</p>
                <p className={classes.productSale}>-{product.sale}%</p>
            </div>
            <p className={classes.color_title}>Доступные цвета:
                {product.colors.map(colors =>
                    <span className={classes.productColorName} key={colors.id}>{colors.colorName}</span>
                )}
            </p>
            <div className={classes.product_color_content}>
                {product.colors.map(colorsType =>
                    <span style={{background: colorsType.color}} key={colorsType.id}
                          className={classes.productColor}></span>
                )}
            </div>
            <p className={classes.product_sizeTitle}>Выберите размер</p>
            <div className={classes.product_size_content}>
                {product.sizes.map((size, index) =>
                    <span key={index}>{size}</span>
                )}

            </div>
            <p className={classes.product_countTitle}>Укажите количество</p>
            <div className={classes.product_count_content}>
                {count.length < 8 ?
                    count.map(count =>
                        <span key={count}>{count}</span>
                    )
                    :
                    count.map(count =>
                        count < 7 ?
                            < span key={count}>{count}</span>
                            :
                            '.'
                    )

                }
            </div>
            <div className={classes.product_like_content}>
                <MyButton style={{"textTransform": "uppercase"}} className={classes.product_to_bag}>ДОБАВИТЬ
                    В
                    КОРЗИНУ
                    <BsArrowRight className={classes.product_aboutIcon}/>
                </MyButton>
                <button className={classes.productLike}>
                    <BsHeart className={classes.product_aboutIcon}/>
                </button>
            </div>
            <p className={classes.product_article}>
                Артикул:
                <span>{product.article}</span>
            </p>
            <div className={classes.product_location_content}>
                <p className={classes.product_locationTitle}>Доступно в магазинах:</p>
                {product.shop.map((shop, index) =>
                    <p className={classes.product_location} key={index}>
                        {shop.name} :
                        <span>{shop.shopCount}</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProductAbout;