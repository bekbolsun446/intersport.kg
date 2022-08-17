import React, {useContext, useEffect, useState} from "react";
import './global.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Content from "./content/Content";
import Main from "./page/main/Main";
import Catalog from "./page/catalog/Catalog";
import NotFoundPage from "./page/not-found/NotFoundPage";
import Product from "./page/product/Product";
import Vacancies from "./page/vacancies/Vacancies";
import Vacancy from "./page/vacancy/Vacancy";
import {MyContext} from "./provider/Provider";
import Loading from "./component/loading/Loading";

function App() {
    const context = useContext(MyContext)
    const {error, setError} = context.error;
    const {isLoaded, setIsLoaded} = context.isLoaded
    if (error) {
        return (
            <h1>Error: {error.message}</h1>
        )
    } else if (!isLoaded) {
        return (<Loading/>)
    } else {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Content/>}>
                            <Route index element={<Main/>}/>
                            <Route path='catalog' element={<Catalog/>}/>
                            <Route path=':name' element={<Product/>}/>
                            <Route path='vacancies' element={<Vacancies/>}/>
                            <Route path='vacancy' element={<Vacancy/>}/>
                        </Route>
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
