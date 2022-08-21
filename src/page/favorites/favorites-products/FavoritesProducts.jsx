import React, {useContext} from 'react';
import classes from "./FavoritesProducts.module.scss";
import FavoritesProduct from "./favorites-product/FavoritesProduct";
import {MyContext} from "../../../provider/Provider";

const FavoritesProducts = (props) => {
    const {} = props;
    const context = useContext(MyContext);
    const {favorites, setFavorites} = context.favorites
    return (
        <div className={classes.favorites_products}>
            {favorites.map(fProduct =>
                <FavoritesProduct key={fProduct.id} fProduct={fProduct}/>
            )}
        </div>
    );
};

export default FavoritesProducts;