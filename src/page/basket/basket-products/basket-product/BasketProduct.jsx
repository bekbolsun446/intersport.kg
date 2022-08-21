import React, {useState, useContext} from 'react';
import classes from "./BasketProduct.module.scss";
import {FiHeart} from 'react-icons/fi'
import {BsFillHeartFill} from 'react-icons/bs'
import {AiOutlineDelete} from 'react-icons/ai'
import BasketProductsSelect from "./basket-product-select/BasketProductsSelect";
import '../../../product/product-about/productsAbout.scss'
import {MyContext} from "../../../../provider/Provider";

const BasketProduct = (props) => {
    const {bProduct} = props;

    //GET CONTEXT (DATA) FROM  PROVIDER
    const context = useContext(MyContext);  // import context
    const {basket, setBasket} = context.basket; //get basket ,setBasket to change it
    //GET CONTEXT (DATA) FROM  PROVIDER

    // -------- CHOOSING ABILITY IN BASKET PAGE -----
    const [choose, setChoose] = useState({  // Default values of size ,count and color to show
        count: bProduct.choose.count,
        size: bProduct.choose.size,
        color: bProduct.choose.color
    })
    const colorName = bProduct.colors[choose.color - 1].colorName // give var to show colorName on display


    const count = [];  //Give var as array to display all counts of product
    for (let i = 1; i < bProduct.count + 1; i++) {  // Push counts to array  by cycle
        count.push(i)
    }
    let productIndex;   // give var  and get current product from basket array by cycle
    for (let i = 0; i < basket.length; i++) {
        if (bProduct.id == basket[i].id) {
            productIndex = i;
        }
    }
    let prevProducts = basket.slice(0, productIndex); //get previous products
    let nextProducts = basket.slice(productIndex + 1); //get next products

    // CHANGE PRODUCTS VALUES (SIZE , COUNT OR COLOR)
    const selectCount = (name, id) => {
        setChoose({   // change current index at first to show on display
            ...choose,
            [name]: id
        })
        let currentProduct = {                    //get and change current product
            ...basket[productIndex],
            choose: {
                ...basket[productIndex].choose,
                [name]: id
            }
        };

        setBasket([ // change basket
            ...prevProducts,
            currentProduct,
            ...nextProducts
        ])
    } // CHANGE PRODUCTS VALUES (SIZE , COUNT OR COLOR) END
    // -------- CHOOSING ABILITY IN BASKET PAGE  END-----

    //------DELETE PRODUCT FROM BASKET-----
    const deleteProductFromBasket = (e) => {
        e.preventDefault() // to stop loading
        setBasket([...prevProducts, ...nextProducts]) //change basket (current product excluded)
    }
    //------DELETE PRODUCT FROM BASKET END-----


    //Favorites
    const {favorites, setFavorites} = context.favorites
    const [isFavorite, setIsFavorite] = useState(favorites.some(product => product.id == bProduct.id))
    const addToFavorites = () => {
        if (isFavorite == false) {
            setFavorites([
                ...favorites,
                {
                    ...bProduct,
                    isFavorite: true
                }
            ])
            setIsFavorite(true)
        }
        if (isFavorite == true) {
            let indexFavorite;
            for (let i = 0; i < favorites.length; i++) {
                if (bProduct.id == favorites[i].id) {
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
                            id={`size${bProduct.id}`}
                            idValue={choose.size}
                            lists={bProduct.sizes}
                            title={'Размер'}
                            name={'size'}
                            selectCount={selectCount}
                        />
                        <BasketProductsSelect
                            id={`count${bProduct.id}`}
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
                    {isFavorite ?
                        <BsFillHeartFill
                            onClick={addToFavorites}
                            className={[classes.basket_products_btn, classes.basket_productSavedIcon].join(' ')}/>
                        :

                        <FiHeart onClick={addToFavorites} className={classes.basket_products_btn}/>
                    }
                    <p>|</p>
                    <AiOutlineDelete onClick={deleteProductFromBasket} className={classes.basket_products_btn}/>
                </div>
            </div>
        </div>
    );
};

export default BasketProduct;