import React, {useState, useEffect, useContext} from 'react';
import classes from "./CatalogF.module.scss";
import CatalogHead from "../../component/page-head/PageHead";
import {MyContext} from '../../provider/Provider'
import CatalogFContent from "./catalog-f-content/CatalogFContent";
import CatalogFFilter from "./catalog-f-filter/CatalogFFilter";
import {useParams} from "react-router-dom";

const Catalog = () => {
    let {type} = useParams()
    const [context, setContext] = useState(useContext(MyContext))
    const [products, setProducts] = useState([])
    // const products = context.products;
    useEffect(() => {
        let filteredProducts = context.products.filter(product => {
            return product.name.toLowerCase().includes(type.trim().toLowerCase())
        })
        setProducts(filteredProducts)
    }, [type])

    const prevPages = [
        {
            id: 1,
            link: '/',
            name: 'Главная'
        },
        {
            id: 2,
            link: '/catalog',
            name: 'Каталог'
        }]

    return (
        <div className={classes.catalog}>
            <CatalogHead currentPage={type} prevPages={prevPages}/>
            <CatalogFFilter/>
            {products.length > 0 ?
                <CatalogFContent products={products}/>
                :
                <p className={classes.catalogFNotFound}>There is not any products...</p>
            }
        </div>
    );
};

export default Catalog;