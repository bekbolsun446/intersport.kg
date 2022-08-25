import React, {useContext, useState} from 'react';
import classes from "./ProductAbout.module.scss";
import MyButton from "../../../component/UI/my_button/MyButton";
import {BsArrowRight, BsHeart} from 'react-icons/bs';
import {AiFillHeart} from 'react-icons/ai'
import './productsAbout.scss'
import {MyContext} from "../../../provider/Provider";


const ProductAbout = (props) => {
        const {product} = props

        // Showing every count to choose
        const count = [];
        for (let i = 1; i < product.count + 1; i++) {
            count.push(i)
        }

        // -------PRODUCTS CHOOSING ABILITY----------------
        // Choosing product we need //
        const context = useContext(MyContext);  // import context
        const {basket, setBasket} = context.basket  // get actual items from context
        const [choose, setChoose] = useState({ // choosing ability with state
            count: 1,
            size: 1,
            color: 1
        })

        const interUser = context.register.user.interUser // user
        const toggleSignForSave = context.register.toggleSignForSave //save or not function

        const colorName = product.colors[choose.color - 1].colorName    // changing  colorName while customer choosing
        const selectCount = (name, id) => {
            setChoose({
                ...choose,
                [name]: id
            })
        }   // changing state while choosing
        // Choosing product we need End

        //Check if product exists in basket
        const isExist = (element) => {
            return element.id === product.id
        };    // function that check existing
        const [isIncluded, setIsIncluded] = useState(basket.some(isExist)) // Give variable as boolean
        //Check if product exists in basket  End

        // Add to basket or delete from basket Function
        const addBasket = (e, id) => {
            e.preventDefault();
            // Add to basket
            if (isIncluded === false) {
                setBasket([
                    ...basket,
                    {
                        ...product,
                        choose
                    }])
                setIsIncluded(true)
            } else if (isIncluded === true) {   // Delete from basket
                const filteredBasket = basket.filter(bProducts => bProducts.id !== product.id)
                setBasket([...filteredBasket])
                setIsIncluded(false)
            }
        }
        // Add to basket or delete from basket Function End
        // -------PRODUCTS CHOOSING ABILITY END ----------------


        // --------------------SAVE PRODUCT---------------------------
        //Favorites
        const {favorites, setFavorites} = context.favorites
        const [isFavorite, setIsFavorite] = useState(favorites.some(fProduct => fProduct.id == product.id))
        const addToFavorites = (e) => {
            e.preventDefault();
            if (isFavorite == false) {
                if (!interUser.isLogin) {
                    return toggleSignForSave()
                }
                setFavorites([
                    ...favorites,
                    {
                        ...product,
                        isFavorite: true
                    }
                ])
                setIsFavorite(true)
            }
            if (isFavorite == true) {
                let indexFavorite;
                for (let i = 0; i < favorites.length; i++) {
                    if (product.id == favorites[i].id) {
                        indexFavorite = i
                    }
                }
                let prevFavorites = favorites.slice(0, indexFavorite)
                let nextFavorites = favorites.slice(indexFavorite + 1)
                setFavorites([
                    ...prevFavorites,
                    ...nextFavorites
                ])
                setIsFavorite(false)
            }
        }
        // Favorites

        // --------------------SAVE PRODUCT END---------------------------
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

                {product.sizes.length > 0 &&
                    <>
                        <p className={classes.product_sizeTitle}>Выберите размер</p>
                        <div className={classes.product_size_content}>
                            {product.sizes.map((size, index) =>
                                <span
                                    key={index}
                                    className={index + 1 == choose.size ? 'countActive' : ''}
                                    onClick={() => selectCount('size', index + 1)}
                                >
                                        {size}
                                    </span>
                            )}
                        </div>
                    </>
                }
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
                        onClick={(e) => addBasket(e, product.id)}
                    >
                        {isIncluded ? 'Добавлено' : 'ДОБАВИТЬ В КОРЗИНУ'}
                        <BsArrowRight className={classes.product_aboutIcon}/>
                    </MyButton>
                    <MyButton
                        onClick={addToFavorites}
                        className={classes.productLike}>
                        {isFavorite ?
                            'сохранено'
                            :
                            'сохранить в избранное'
                        }
                        {isFavorite ?
                            <AiFillHeart className={[classes.product_aboutIcon, classes.product_aboutSaved].join(' ')}/>
                            :
                            <BsHeart className={classes.product_aboutIcon}/>
                        }
                    </MyButton>
                </div>
                {product.article &&
                    <p className={classes.product_article}>
                        Артикул:
                        <span>{product.article}</span>
                    </p>
                }
                {product.shop.length > 0 &&
                    <div className={classes.product_location_content}>
                        <p className={classes.product_locationTitle}>Доступно в магазинах:</p>
                        {product.shop.map((shop, index) =>
                            <p className={classes.product_location} key={index}>
                                {shop.name} :
                                <span>{shop.shopCount}</span>
                            </p>
                        )}
                    </div>
                }
            </div>
        );
    }
;

export default ProductAbout;