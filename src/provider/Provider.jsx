import React, {useState, createContext, useEffect} from 'react';
import App from "../App";
import * as data from '../data/data'
import $ from "jquery";
import {gsap} from "gsap";

export const MyContext = createContext();

const Provider = () => {
    const [isLoaded, setIsLoaded] = useState(true)
    const [error, setError] = useState(false)

    //---------------GET DATA ----------
    const vacancies = data.data.vacancies
    const products = data.data.products;
    const categories = data.data.categories;
    const headerWarn = data.data.headerWarn

    //---------------GET DATA END----------

    //----------------BASKET PRODUCTS ---------------
    const localeBasket = localStorage.getItem('basket')
    const localedBasket = JSON.parse(localeBasket)
    const [basket, setBasket] = useState(localedBasket ? localedBasket : [])

    let allProductsCount = 0;   // All count of basket products to show on header
    for (let i = 0; i < basket.length; i++) {
        let product = basket[i]
        allProductsCount += product.choose.count
    }
    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket])
    //----------------BASKET PRODUCTS  END---------------

    //---------FAVORITE PRODUCTS---------------

    const localeFavorites = localStorage.getItem('favorites')
    const localedFavorites = JSON.parse(localeFavorites)
    const [favorites, setFavorites] = useState(localedFavorites ? localedFavorites : [])
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    //---------FAVORITE PRODUCTS END---------------

    //-----------MOBILE HEADER SHOW ,HIDE ---------

    const [isShownHeader, setIsShownHeader] = useState(false);

    useEffect(() => {
        if (isShownHeader) {
            $('body').css('overflow', 'hidden')
        } else if (!isShownHeader) {
            $('body').css('overflow', 'auto')
        }
    })

    const toggleMobileHeader = () => {
        if (!isShownHeader) {
            gsap.to('.header_mobile', {left: 0, duration: .1});
            setIsShownHeader(true);
            gsap.to('.category_content', {height: 0, duration: .2})
            gsap.to('.subcategory_content', {height: 0, duration: .2});
        } else {
            gsap.to('.header_mobile', {left: '-100%', duration: .1})
            gsap.to(`.headerMenuArrow`, {rotation: 0, duration: .2})
            gsap.to(`.header_mobil_subcategoryIcon`, {rotation: 0, duration: .2})
            setIsShownHeader(false)
        }
    }
    //-----------MOBILE HEADER SHOW ,HIDE  END---------

    //-------------REGISTER FUNCTIONS -----------------
    const [showLogin, setShowLogin] = useState(false)   //----------login
    const [showSignUp, setShowSignUp] = useState(false) //----------sign up
    const localeInterUser = localStorage.getItem('interUser')
    const localedInterUser = JSON.parse(localeInterUser)
    const [interUser, setInterUser] = useState(localedInterUser ? localedInterUser : {})  // ------ Authorization user

    const localeInterUsers = localStorage.getItem('interUsers')
    const localedInterUsers = JSON.parse(localeInterUsers)
    const [interUsers, setInterUsers] = useState(localedInterUsers ? localedInterUsers : [])  // ------ Authorization users
    const [signForSave, setSignForSave] = useState(false) // sign for save products
    const toggleSignForSave = () => {
        setSignForSave(!signForSave)
    }

    useEffect(() => {
        localStorage.setItem('interUser', JSON.stringify(interUser));
        localStorage.setItem('interUsers', JSON.stringify(interUsers));
    }, [interUser])

    const toggleShowLogin = () => {  // toggle log in
        setShowSignUp(false)
        setShowLogin(!showLogin)
    }
    const toggleShowSignUp = () => { // toggle sign up
        setShowLogin(false)
        setShowSignUp(!showSignUp)
    }
    //-------------REGISTER FUNCTIONS END-----------------

    const contextValue = {
        categories: categories,
        products: products,
        vacancies: vacancies,
        error: {error, setError},
        isLoaded: {isLoaded, setIsLoaded},
        basket: {basket, setBasket},
        allProductsCount: allProductsCount,
        favorites: {favorites, setFavorites},
        headerWarn: headerWarn,
        mobileHeader: {
            isShownHeader: isShownHeader,
            toggleMobileHeader: toggleMobileHeader
        },
        register: {
            login: {showLogin, setShowLogin},
            signUp: {showSignUp, setShowSignUp},
            user: {interUser, setInterUser},
            users: {interUsers, setInterUsers},
            signForSave: {signForSave, setSignForSave},
            toggleShowSignUp,
            toggleShowLogin,
            toggleSignForSave
        }
    }

    return (
        <MyContext.Provider value={contextValue}>
            <App/>
        </MyContext.Provider>
    );
};

export default Provider;
