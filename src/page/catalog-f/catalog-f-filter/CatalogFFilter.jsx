import React from 'react';
import classes from "./CatalogFFilter.module.scss";
import CatalogFFilterCategory from "./catalog-f-filter-category/CatalogFFilterCategory";

const CatalogFilter = () => {
    return (
        <div className={classes.catalog_filter}>
            <CatalogFFilterCategory/>
        </div>
    );
};

export default CatalogFilter;