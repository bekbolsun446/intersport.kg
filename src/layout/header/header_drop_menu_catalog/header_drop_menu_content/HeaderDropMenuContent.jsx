import React, {useEffect, useState} from 'react';
import HeaderMenu from "./header-menu/HeaderMenu";
import classes from "./HeaderDropMenuContent.module.scss";
import './HeaderDropMenuContent.module.scss'
import {gsap} from "gsap";
import $ from 'jquery'

const HeaderDropMenuContent = (props) => {
    const {headerMenus} = props

    const [headerClass, setHeaderClass] = useState({
        men: [classes.header_drop_menu_contentItem].join(' '),
        women: [classes.header_drop_menu_contentItem].join(' '),
        children: [classes.header_drop_menu_contentItem].join(' ')
    })
    useEffect(() => {
        $('body').mouseleave(() => {
            gsap.to('#menCatalog', {height: 0, duration: .1})
            gsap.to('#womenCatalog', {height: 0, duration: .1})
            gsap.to('#childrenCatalog', {height: 0, duration: .1})
        })

        // DROP DOWN MENU FOR MEN
        $('#men ,#menCatalog').mouseover(() => {
            gsap.to('#menCatalog', {height: '90vh', duration: .1, ease: 'linear'})
        })
        $('#men,#menCatalog').mouseleave(() => {
            gsap.to('#menCatalog', {height: 0, duration: .1})
        })
        // DROP DOWN MENU FOR WOMEN
        $('#women ,#womenCatalog').mouseover(() => {
            gsap.to('#womenCatalog', {height: '90vh', duration: .1})
        })
        $('#women,#womenCatalog').mouseleave(() => {
            gsap.to('#womenCatalog', {height: 0, duration: .1})
        })
        // DROP DOWN MENU FOR CHILDREN
        $('#children ,#childrenCatalog').mouseover(() => {
            gsap.to('#childrenCatalog', {height: '90vh', duration: .1})
        })
        $('#children,#childrenCatalog').mouseleave(() => {
            gsap.to('#childrenCatalog', {height: 0, duration: .1})
        })
    })


    return (
        <div className={classes.header_drop_menu_catalog}>
            <div
                id={'menCatalog'}
                className={headerClass.men}
            >
                <HeaderMenu id='men' headermenu={headerMenus.men}/>
            </div>
            <div
                id={'womenCatalog'}
                className={headerClass.women}
            >
                <HeaderMenu id='women' headermenu={headerMenus.women}/>
            </div>
            <div
                id={'childrenCatalog'}
                className={headerClass.children}
            >
                <HeaderMenu id='children' headermenu={headerMenus.children}/>
            </div>
        </div>
    );
};

export default HeaderDropMenuContent;