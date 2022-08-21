import React from 'react';
import classes from "./Favorites.module.scss";
import PageHead from "../../component/page-head/PageHead";
import BasketProducts from "../basket/basket-products/BasketProducts";
import BasketAside from "../basket/basket-aside/BasketAside";
import FavoritesProduct from "./favorites-products/favorites-product/FavoritesProduct";
import FavoritesProducts from "./favorites-products/FavoritesProducts";

const Favorites = () => {

    return (
        <div className={classes.favorites}>
            <PageHead currentPage={'Favorites'}/>
            <h2 className={classes.favoritesTitle}>
                Избранные модели |
                <span className={classes.favoritesTitleCount}></span>
            </h2>
            <div className={classes.favorites_content}>
                <FavoritesProducts/>
            </div>
        </div>
    );
};

export default Favorites;