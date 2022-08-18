import React from 'react';
import classes from "./Card.module.scss";
import {Link} from "react-router-dom";


const Card = (props) => {
    const {product} = props
    const name = product.name.length > 21 ? `${product.name.slice(0, 21)} ...` : product.name

    let colors = product.colors;
    return (
        <div className={classes.card}>
            <div className={classes.card_img_content}>
                <img src={product.img} className={classes.cardImg} alt=""/>
                {product.isNew &&
                    <span className={classes.cardNew}>Новинка</span>
                }
                <svg className={classes.cardLike} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                     viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 4.59511C10.896 3.58911 9.48798 3.03711 8.00398 3.03711C6.42598 3.03711 4.93198 3.66011 3.79098 4.79511C1.43798 7.15811 1.43898 10.8541 3.79298 13.2071L11.125 20.5391C11.295 20.8381 11.623 21.0311 12 21.0311C12.322 21.0311 12.609 20.8681 12.792 20.6221L20.207 13.2071C22.561 10.8531 22.561 7.15811 20.205 4.79111C19.068 3.66011 17.574 3.03711 15.996 3.03711C14.513 3.03711 13.104 3.58911 12 4.59511ZM18.791 6.20511C20.354 7.77611 20.355 10.2301 18.793 11.7931L12 18.5861L5.20698 11.7931C3.64498 10.2301 3.64598 7.77611 5.20498 6.20911C5.96498 5.45311 6.95898 5.03711 8.00398 5.03711C9.04898 5.03711 10.039 5.45311 10.793 6.20711L11.293 6.70711C11.684 7.09811 12.316 7.09811 12.707 6.70711L13.207 6.20711C14.719 4.69811 17.281 4.70211 18.791 6.20511Z"
                        fill="#1D1D1D"/>
                </svg>
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