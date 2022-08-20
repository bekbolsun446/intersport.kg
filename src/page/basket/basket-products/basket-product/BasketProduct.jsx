import React, {useState} from 'react';
import classes from "./BasketProduct.module.scss";
import {FiHeart} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'
import BasketProductsSelect from "./basket-product-select/BasketProductsSelect";
import '../../../product/product-about/productsAbout.scss'

const BasketProduct = (props) => {
    const {bProduct} = props;
    const [choose, setChoose] = useState({
        count: bProduct.choose.count,
        size: bProduct.choose.size,
        color: bProduct.choose.color
    })
    const colorName = bProduct.colors[choose.color - 1].colorName

    const count = [];
    for (let i = 1; i < bProduct.count + 1; i++) {
        count.push(i)
    }

    function selectCount(name, id) {
        setChoose({
            ...choose,
            [name]: id
        })
    }

    return (
        <div className={classes.basket_product}>
            <div className={classes.product_content}>
                <div className={classes.basket_product_img}>
                    <img
                        src={bProduct.img}
                        alt="b Product"/>
                </div>
                <div className={classes.basket_product_about}>
                    <p className={classes.basket_productBrand}>{bProduct.brand}</p>
                    <p className={classes.basket_productName}>{bProduct.name}</p>
                    <div className={classes.basket_product_about_color}>
                        <p className={classes.basket_product_about_colorName}>
                            Цвета:
                            <span>{colorName}</span>
                        </p>
                        <div className={classes.basket_product_about_colors}>
                            {bProduct.colors.map((color, index) =>
                                <span
                                    key={color.id}
                                    className={choose.color == color.id ? 'colorActive' : ''}
                                    style={{background: color.color}}
                                    onClick={() => selectCount('color', index + 1)}
                                ></span>
                            )}
                        </div>
                    </div>
                    <div className={classes.basket_product_about_foot}>
                        <BasketProductsSelect
                            id={bProduct.id}
                            idValue={choose.size}
                            lists={bProduct.sizes}
                            title={'Размер'}
                            name={'size'}
                            selectCount={selectCount}
                        />
                        <BasketProductsSelect
                            id={bProduct.id + 1}
                            lists={count}
                            idValue={choose.count}
                            title={'Количество'}
                            name={'count'}
                            selectCount={selectCount}
                        />
                    </div>
                </div>
            </div>
            <div className={classes.basket_products_price_content}>
                <p className={classes.basket_productPrice}>{bProduct.newPrice} c</p>
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