import React, {useContext, useState} from 'react';
import classes from "./Card.module.scss";
import {Link} from "react-router-dom";
import {FaRegHeart} from 'react-icons/fa'
import {BsFillHeartFill} from 'react-icons/bs'
import {MyContext} from "../../provider/Provider";
import register from "../register/Register";


const Card = (props) => {
    const {product} = props
    const name = product.name.length > 21 ? `${product.name.slice(0, 21)} ...` : product.name
    let colors = product.colors;
    const context = useContext(MyContext);
    const interUser = context.register.user.interUser
    const toggleSignForSave = context.register.toggleSignForSave

    //Favorites
    const {favorites, setFavorites} = context.favorites;
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


    return (
        <div className={classes.card}>
            <div className={classes.card_img_content}>
                <img src={product.img} className={classes.cardImg} alt=""/>
                {product.isNew &&
                    <span className={classes.cardNew}>Новинка</span>
                }
                <span className={classes.cardLike}>
                    {isFavorite ?
                        <BsFillHeartFill onClick={addToFavorites}
                                         className={[classes.cardLikeIcon, classes.cardSavedIcon].join(' ')}/>
                        :
                        <FaRegHeart onClick={addToFavorites} className={classes.cardLikeIcon}/>
                    }
               </span>
            </div>
            <div className={classes.card_body}>
                <p className={classes.cardBrand}>{product.brand}</p>
                <h4 className={classes.card_name}>
                    {name}
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="11" viewBox="0 0 26 11" fill="none">
                        <rect y="5" width="24" height="1" fill="#1D1D1D"/>
                        <path d="M20 1L24.5 5.5L20 10" stroke="#1D1D1D"/>
                    </svg>
                </h4>
                <div className={classes.card_price}>
                    <p className={classes.card_newPrice}>{product.newPrice} c</p>
                    <p className={classes.card_oldPrice}>{product.oldPrice} c</p>
                    <p className={classes.card_sale}>-{product.sale}%</p>
                </div>
                <div className={classes.card_color}>
                    {colors.map(color =>
                        <span style={{background: color.color}} key={color.id}></span>
                    )}
                </div>
            </div>
            <Link to={`/products/${product.name}`} className={classes.cardLink}></Link>
        </div>
    );
};

export default Card;