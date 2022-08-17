import React from 'react';
import classes from "./CatalogFilter.module.scss";
import CatalogFilterCategory from "./catalog-filter-category/CatalogFilterCategory";

const CatalogFilter = () => {
    return (
        <div className={classes.catalog_filter}>
            <CatalogFilterCategory/>
            <CatalogFilterCategory/>
            <CatalogFilterCategory/>
            <CatalogFilterCategory/>
            <CatalogFilterCategory/>
            <CatalogFilterCategory/>
            <CatalogFilterCategory/>
        </div>
    );
};

export default CatalogFilter;