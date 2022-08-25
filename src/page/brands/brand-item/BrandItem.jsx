import React, {useState} from 'react';
import classes from "./BrandItem.module.scss";
import {Link} from "react-router-dom";
import {BsArrowRight} from 'react-icons/bs'
import {AiOutlineLine} from 'react-icons/ai'

const BrandItem = (props) => {
    const {brand} = props;

    const subcategories = ['Аксессуары', 'Одежда', 'Обувь', 'Костюмы']
    return (
        <div className={classes.brand_item}>
            <p className={classes.brand_itemTitle}>{brand}</p>
            <div className={classes.brand_item_content}>
                {subcategories.map(subcategory =>
                    <Link
                        key={subcategory}
                        to={`/catalog/brand=${brand},subcategory=${subcategory}`.toLocaleLowerCase()}
                        className={classes.brand_item_subcategory}
                    >
                        <img src="https://intersport.kg/static/img/png/image.png" alt=""/>
                        <p
                            className={classes.brand_item_subcategoryName}
                        >
                            {subcategory}
                            <BsArrowRight className={classes.brand_itemIcon}/>
                        </p>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default BrandItem;