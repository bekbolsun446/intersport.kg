import React, {useState, createContext, useEffect} from 'react';
import App from "../App";
import * as data from '../data/data'

export const MyContext = createContext();

const Provider = () => {
    const [isLoaded, setIsLoaded] = useState(true)
    const [error, setError] = useState(false)

    const vacancies = data.data.vacancies
    const products = data.data.products;
    const categories = data.data.categories;


    const contextValue = {
        categories: categories,
        products: products,
        error: {error, setError},
        isLoaded: {isLoaded, setIsLoaded},
        vacancies: vacancies
    }

    return (
        <MyContext.Provider value={contextValue}>
            <App/>
        </MyContext.Provider>
    );
};

export default Provider;
