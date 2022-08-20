import React, {useEffect} from 'react';
import classes from "./HeaderSearchLists.module.scss";
import {NavLink} from "react-router-dom";
import {gsap} from "gsap";
import $ from 'jquery'

const HeaderSearchLists = (props) => {
    const {searchList, isShow, headerSearch} = props

    useEffect(() => {
        let currentHeight = $('.headerSearchContent').height()
        function showSearch() {
            if (!isShow.search) {
                return gsap.fromTo('.headerSearchContent', {height: `${currentHeight}px`}, {height: 0, duration: .1})
            }
            if (isShow.search) {
                if (!headerSearch) {
                    $()
                    return gsap.fromTo('.headerSearchContent', {height: `${parseInt(currentHeight)}px`}, {
                        height: 0,
                        duration: .1
                    })
                }
                return gsap.to('.headerSearchContent', {height: 'auto', duration: .4})
            }
        }

        showSearch()
    })

    return (
        <div className={[classes.headerSearchContent, 'headerSearchContent'].join(' ')}>
            {searchList.length > 0 ?
                <ul className='container'>
                    {searchList.map(product =>
                        <li key={product.id}>
                            <NavLink to={product.name}>{product.name}</NavLink>
                        </li>
                    )}
                </ul>
                :
                <h1 style={{textAlign: "center"}}>There is no Products</h1>
            }
        </div>
    );
};

export default HeaderSearchLists;