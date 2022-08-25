import React, {useState, useEffect, useContext} from 'react';
import classes from "./CatalogF.module.scss";
import CatalogHead from "../../component/page-head/PageHead";
import {MyContext} from '../../provider/Provider'
import CatalogFContent from "./catalog-f-content/CatalogFContent";
import {useParams} from "react-router-dom";
import $ from 'jquery'

const Catalog = () => {
    let {filter} = useParams()
    const [context, setContext] = useState(useContext(MyContext))
    const [filteredProducts, setFilteredProducts] = useState([])

    //----------------- FILTERING PRODUCTS---------------
    // Split url name
    let [first, second] = filter.includes(',') ? filter.split(',') : filter.split('=')
    let currentPage = second.includes('=') ? `${first.split('=')[1]} ,${second.split('=')[1]}` : second

    useEffect(() => {
        let products;
        // If it has two filterers
        const filteringProducts = () => {
            if (second.includes('=')) {
                let [category, categoryValue] = first.split('=');
                let [type, typeValue] = second.split('=');
                products = context.products.filter(product => product.category.toLowerCase() == categoryValue.toLowerCase())
                if (type == 'subcategory') {
                    if (category == 'brand') {
                        products = context.products.filter(product => product.brand.toLowerCase().includes(categoryValue));
                        products = products.filter(product => product.subCategory.toLowerCase() == typeValue)
                        return setFilteredProducts(products)
                    }
                    products = products.filter(product => product.subCategory.toLowerCase() == typeValue)
                } else if (type == 'typename') {
                    products = products.filter(product => product.name.toLowerCase().includes(typeValue))
                } else if (typeValue == 'новинки') {
                    products = products.filter(product => product.isNew)
                } else if (typeValue == 'со скидкой') {
                    products = products.filter(product => product.sale)
                }
                return setFilteredProducts(products)
            } else if (!second.includes('=')) { // If it has one filterer
                if (first == 'category') {
                    products = context.products.filter(product => product.category.toLowerCase() == second.toLowerCase())
                } else if (second == 'новинки') {
                    products = context.products.filter(product => product.isNew)
                } else if (second == 'популярное') {
                    products = context.products.filter(product => product.isPopular)
                } else if (second == 'звезды') {
                    products = context.products.filter(product => product.isStar)
                } else if (second == 'скидки') {
                    products = context.products.filter(product => product.sale)
                } else if (first == 'typename') {
                    products = context.products.filter(product => product.name.toLowerCase().includes(second))
                } else if (first == 'sport') {
                    products = context.products.filter(product => product.typeOfSport.toLowerCase() == second)
                } else if (second == 'all') {
                    products = context.products
                } else if (first == 'brand') {
                    products = context.products.filter(product => product.brand.toLowerCase().includes(second))
                }
                return setFilteredProducts(products && products)
            }
        }
        filteringProducts()
    }, [filter])

    //----------------- FILTERING PRODUCTS---------------


    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [filter]);

    // ----- head of page prev pages
    const prevPages = [
        {
            id: 2,
            link: '/catalog/type=all',
            name: 'Каталог'
        }]

    return (
        <div className={classes.catalog_f}>
            <CatalogHead currentPage={currentPage} prevPages={prevPages}/>
            {filteredProducts.length > 0 ?
                <CatalogFContent products={filteredProducts}/>
                :
                <p className={classes.catalogFNotFound}>There is not any products...</p>
            }
        </div>
    );
};

export default Catalog;