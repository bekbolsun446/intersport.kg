import React, {useContext, useState} from 'react';
import classes from "./ProductAbout.module.scss";
import MyButton from "../../../component/UI/my_button/MyButton";
import {BsArrowRight, BsHeart} from 'react-icons/bs';
import './productsAbout.scss'
import {MyContext} from "../../../provider/Provider";

const ProductAbout = (props) => {
        const {product} = props
        const context = useContext(MyContext);
        const {basket, setBasket} = context.basket
        const [choose, setChoose] = useState({
            count: 1,
            size: 1,
            color: 1
        })

        const count = [];
        for (let i = 1; i < product.count + 1; i++) {
            count.push(i)
        }

        function selectCount(name, id) {
            setChoose({
                ...choose,
                [name]: id
            })
        }

        const [isIncluded, setIsIncluded] = useState(false)

        function addBasket(e) {
            e.preventDefault();
            setBasket([
                ...basket,
                {
                    ...product,
                    choose
                }])
            setIsIncluded(true)
            console.log(basket)
        }

        const colorName = product.colors[choose.color - 1].colorName

        return (
            <div className={classes.product_about}>
                {product.brand && <p className={classes.productBrand}>{product.brand}</p>}
                <h4 className={classes.product_name}>{product.name}</h4>
                <div className={classes.product_price_content}>
                    <p className={classes.productNewPrice}>{product.newPrice} c</p>
                    {product.oldPrice && <p className={classes.productOldPrice}>{product.oldPrice} c</p>}
                    {product.sale && <p className={classes.productSale}>-{product.sale}%</p>}
                </div>
                {product.colors.length > 0 &&
                    <>
                        <p className={classes.color_title}>Доступные цвета:
                            <span className={classes.productColorName}>
                                {colorName}
                            </span>
                        </p>
                        <div className={classes.product_color_content}>
                            {product.colors.map((colorsType, index) =>
                                <span
                                    style={{
                                        background: colorsType.color
                                    }}
                                    key={colorsType.id}
                                    className={[classes.productColor, index + 1 == choose.color && 'colorActive'].join(' ')}
                                    onClick={() => selectCount('color', index + 1)}
                                > </span>
                            )}
                        </div>
                    </>
                }
                <p className={classes.product_sizeTitle}>Выберите размер</p>
                <div className={classes.product_size_content}>
                    {product.sizes.map((size, index) =>
                        <span
                            key={index}
                            className={index + 1 == choose.size ? 'countActive' : ''}
                            onClick={() => selectCount('size', index + 1)}
                        >
                        {size}</span>
                    )}

                </div>
                <p className={classes.product_countTitle}>Укажите количество</p>
                <div className={classes.product_count_content}>
                    {count.map((count, index) =>
                        <span
                            key={count}
                            onClick={() => selectCount('count', index + 1)}
                            className={index + 1 == choose.count ? 'countActive' : ''}
                        >
                            {count}</span>
                    )
                    }
                </div>
                <div className={classes.product_like_content}>
                    <MyButton
                        style={{"textTransform": "uppercase"}}
                        className={classes.product_to_bag}
                        onClick={addBasket}
                    >
                        ДОБАВИТЬ В КОРЗИНУ
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
    }
;

export default ProductAbout;