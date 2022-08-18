import React, {useState, useEffect, useContext} from 'react';
import MainHead from "../main/main_head/MainHead";
import classes from "./Catalog.module.scss";
import Card from "../../component/card/Card";
import {Outlet, useParams} from "react-router-dom";
import CatalogHead from "./page-head/PageHead";
import CatalogContent from "./catalog-content/CatalogContent";
import CatalogFilter from "./catalog-filter/CatalogFilter";
import {MyContext} from '../../provider/Provider'

const Catalog = () => {
    const [context, setContext] = useState(useContext(MyContext))
    const products = context.products;


    return (
        <div className={classes.catalog}>
            <CatalogHead/>
            <CatalogFilter/>
            <CatalogContent products={products}/>
        </div>
    );
};

export default Catalog;