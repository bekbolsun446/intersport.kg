import React, {useState} from 'react';
import classes from "./BrandItem.module.scss";
import {Link} from "react-router-dom";
import {BsArrowRight} from 'react-icons/bs'
import {AiOutlineLine} from 'react-icons/ai'
import BrandItemSubcategory from "./brand-item-subcategory/BrandItemSubcategory";

const BrandItem = (props) => {
    const {brand} = props;

    const subcategories = ['Аксессуары', 'Одежда', 'Обувь', 'Костюмы']
    return (
        <div className={classes.brand_item}>
            <p className={classes.brand_itemTitle}>{brand}</p>
            <div
                className={classes.brand_item_content}
            >
                {subcategories.map(subcategory =>
                    <BrandItemSubcategory
                        key={subcategory}
                        subcategory={subcategory}
                        brand={brand}
                    />
                )}
            </div>
        </div>
    );
};

export default BrandItem;