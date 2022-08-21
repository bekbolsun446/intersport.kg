import React, {useState, createContext, useEffect} from 'react';
import App from "../App";
import * as data from '../data/data'

export const MyContext = createContext();

const Provider = () => {
    const [isLoaded, setIsLoaded] = useState(true)
    const [error, setError] = useState(false)

    //---------------GET DATA ----------
    const vacancies = data.data.vacancies
    const products = data.data.products;
    const categories = data.data.categories;
    //---------------GET DATA END----------

    //----------------BASKET PRODUCTS ---------------
    const localeBasket = localStorage.getItem('basket')
    const localedBasket = JSON.parse(localeBasket)
    const [basket, setBasket] = useState(localedBasket ? localedBasket : [])

    let allProductsCount = 0; // All count of basket products to show on header
    for (let i = 0; i < basket.length; i++) {
        let product = basket[i]
        allProductsCount += product.choose.count
    }
    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket])
    //----------------BASKET PRODUCTS  END---------------

    const contextValue = {
        categories: categories,
        products: products,
        error: {error, setError},
        isLoaded: {isLoaded, setIsLoaded},
        vacancies: vacancies,
        basket: {basket, setBasket},
        allProductsCount: allProductsCount
    }

    return (
        <MyContext.Provider value={contextValue}>
            <App/>
        </MyContext.Provider>
    );
};

export default Provider;
