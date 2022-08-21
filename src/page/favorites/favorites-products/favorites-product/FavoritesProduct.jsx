import React, {useContext} from 'react';
import classes from "./FavoritesProduct.module.scss";
import {AiOutlineDelete} from "react-icons/ai";
import {Link} from "react-router-dom";
import {MyContext} from "../../../../provider/Provider";

const FavoritesProduct = (props) => {
    const {fProduct} = props;
    const context = useContext(MyContext);
    const {favorites, setFavorites} = context.favorites;


    //---------------DELETE PRODUCT FROM FAVORITES----------------
    const deleteFromFavorites = (e) => {
        e.preventDefault();
        let fIndex;
        for (let i = 0; i < favorites.length; i++) {
            if (fProduct.id == favorites[i].id) {
                fIndex = i
            }
        }
        const prevProducts = favorites.slice(0, fIndex);
        const nextProducts = favorites.slice(fIndex + 1);
        setFavorites([
            ...prevProducts,
            ...nextProducts
        ])
    }
    //---------------DELETE PRODUCT FROM FAVORITES END----------------

    return (
        <Link to={`/products/${fProduct.name}`} className={classes.favorites_product}>
            <div className={classes.favorites_product_content}>
                <div className={classes.favorites_product_img}>
                    <img
                        src={fProduct.img}
                        alt={fProduct.name}/>
                </div>
                <div className={classes.favorites_product_about}>
                    <p className={classes.favorites_productBrand}>{fProduct.brand && fProduct.brand}</p>
                    <p className={classes.favorites_productName}>{fProduct.name}</p>
                    <div className={classes.favorites_product_price_content}>
                        <p className={classes.favorites_productNewPrice}>{fProduct.newPrice} c</p>
                        <p className={classes.favorites_productOldPrice}>{fProduct.oldPrice && fProduct.oldPrice} c</p>
                        <p className={classes.favorites_productSale}> - {fProduct.sale && fProduct.sale} %</p>
                    </div>
                    {fProduct.colors &&
                        <div className={classes.favorites_product_about_color}>
                            <div className={classes.favorites_product_about_colors}>
                                {fProduct.colors.map(color =>
                                    <span key={color.id} style={{background: color.color}}></span>
                                )}
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className={classes.favorites_products_btn_content}>
                <div className={classes.favorites_products_btns}>
                    <AiOutlineDelete onClick={deleteFromFavorites} className={classes.favorites_products_btn}/>
                </div>
            </div>
        </Link>
    );
};

export default FavoritesProduct;