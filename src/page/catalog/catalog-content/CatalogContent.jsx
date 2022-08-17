import React from 'react';
import classes from "./CatalogContent.module.scss";
import Card from "../../../component/card/Card";

const CatalogContent = (props) => {
    const {products} = props

    return (
        <div className={classes.catalog_content}>
            {products.map((card) =>
                <div className={classes.catalog_content_item} key={card.id}>
                    <Card product={card}/>
                </div>
            )}
        </div>
    );
};

export default CatalogContent;