import React, {useState, useEffect, useContext} from 'react';
import MainHead from "../main/main_head/MainHead";
import classes from "./Catalog.module.scss";
import Card from "../../component/card/Card";
import {Outlet, useParams} from "react-router-dom";
import CatalogContent from "./catalog-content/CatalogContent";
import CatalogFilter from "./catalog-filter/CatalogFilter";
import {MyContext} from '../../provider/Provider'
import PageHead from "../../component/page-head/PageHead";

const Catalog = () => {
    const [context, setContext] = useState(useContext(MyContext))
    const products = context.products;

    const prevPages = [
        {
            id: 1,
            link:'/',
            name:'Главная'
        }
    ]
    return (
        <div className={classes.catalog}>
            <PageHead currentPage={'Каталог'} prevPages={prevPages}/>
            <CatalogFilter/>
            <CatalogContent products={products}/>
        </div>
    );
};

export default Catalog;