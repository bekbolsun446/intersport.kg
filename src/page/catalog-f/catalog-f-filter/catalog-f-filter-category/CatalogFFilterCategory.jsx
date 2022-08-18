import React, {useState} from 'react';
import classes from "./CatalogFFilterCategory.module.scss";

const CatalogFilterCategory = (props) => {
    const {} =props
    const [isShown,setIsShown]=useState(false)

    function toggleIsShow(e) {
        e.preventDefault();
        setIsShown(!isShown)
    }

    return (
        <div className={classes.catalog_filter_category}>
            <button onClick={toggleIsShow}
                    className={isShown ? [classes.catalog_filter_category_title,classes.catalog_filter_category_title_show].join(' ')
            :
                        classes.catalog_filter_category_title
            }>
                ПОЛ
                <span>^^</span>
            </button>
            <div
                className={isShown ? [classes.catalog_filter_category_content,classes.catalog_filter_category_content_show].join(' ') :
                    [classes.catalog_filter_category_content].join(' ')
            }
            >
                <label htmlFor="item">
                    <input id='item' type="checkbox"/>
                    <p>Female</p>
                </label>
            </div>
        </div>
    );
};

export default CatalogFilterCategory;