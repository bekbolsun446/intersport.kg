import React from 'react';
import classes from "./ProductContenUseful.module.scss";

const ProductContentUseful = (props) => {
    const {title, description, lists} = props;
    return (
        <div className={classes.product_content_useful}>
            <h2 className={classes.product_content_usefulTitle}>{title}</h2>
            <p className={classes.product_content_usefulBody}>{description}</p>
            <p className={classes.product_content_usefulLiTitle}>{lists && lists.name}</p>
            <ul>
                {lists && lists.item.map((list, index) =>
                    <li key={index}>{list}</li>
                )}
            </ul>
        </div>
    );
};

export default ProductContentUseful;