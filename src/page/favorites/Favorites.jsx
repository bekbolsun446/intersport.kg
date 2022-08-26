import React,{useEffect} from 'react';
import classes from "./Favorites.module.scss";
import PageHead from "../../component/page-head/PageHead";
import FavoritesProducts from "./favorites-products/FavoritesProducts";

const Favorites = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <div className={classes.favorites}>
            <PageHead currentPage={'Избранные модели'}/>
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