import React, {useContext, useEffect, useState} from "react";
import './global.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Content from "./content/Content";
import Main from "./page/main/Main";
import Catalog from "./page/catalog/Catalog";
import NotFoundPage from "./page/not-found/NotFoundPage";
import Product from "./page/product/Product";
import Vacancies from "./page/vacancies/Vacancies";
import Vacancy from "./page/vacancies/vacancy/Vacancy";
import {MyContext} from "./provider/Provider";
import Loading from "./component/loading/Loading";
import CatalogF from "./page/catalog-f/CatalogF";
import Basket from "./page/basket/Basket";
import Favorites from "./page/favorites/Favorites";

function App() {
    const context = useContext(MyContext)
    const {error, setError} = context.error;
    const {isLoaded, setIsLoaded} = context.isLoaded
    // if (error) {
    //     return (
    //         <h1>Error: {error.message}</h1>
    //     )
    // } else
    if (!isLoaded) {
        return (<Loading/>)
    } else {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Content/>}>
                            <Route index element={<Main/>}/>
                            <Route path='catalog' element={<Catalog/>}/>
                            <Route path='catalog/:filter' element={<CatalogF/>}/>
                            <Route path={`products/:name`} element={<Product/>}/>
                            <Route path='vacancies' element={<Vacancies/>}/>
                            <Route path={`vacancies/:name`} element={<Vacancy/>}/>
                            <Route path={'basket'} element={<Basket/>}/>
                            <Route path={'favorites'} element={<Favorites/>}/>
                        </Route>
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
