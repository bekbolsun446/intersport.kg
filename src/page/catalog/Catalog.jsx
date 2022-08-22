import React, {useState, useContext} from 'react';
import classes from "./Catalog.module.scss";
import CatalogContent from "./catalog-content/CatalogContent";
import {MyContext} from '../../provider/Provider'
import PageHead from "../../component/page-head/PageHead";

const Catalog = () => {
    const [context, setContext] = useState(useContext(MyContext))
    const products = context.products;

    return (
        <div className={classes.catalog}>
            <PageHead currentPage={'Каталог'}/>
            <CatalogContent products={products}/>
        </div>
    );
};

export default Catalog;