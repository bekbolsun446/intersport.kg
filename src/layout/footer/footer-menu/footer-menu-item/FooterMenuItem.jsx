import React, {useEffect, useState} from 'react';
import classes from "./FooterMenuItem.module.scss";
import {Link} from "react-router-dom";
import {FiPlus} from "react-icons/fi"
import {gsap, Power4, Linear} from "gsap";
import $ from 'jquery'

const FooterMenuItem = (props) => {
    const {footerMenu, isShow} = props
    const [show, setShow] = useState(isShow[footerMenu.id])

    useEffect(() => {
        // DROP-DOWN ANIMATION ON CLICK
        if ($(window).width() < 992) {
            // For Catalog category
            $(`.footerCatalog`).click(() => {
                if ($('.footerCatalogCatalog').height() > 0) {
                    gsap.to(`.footerCatalogCatalog`, {duration: .2, height: 0, ease: Power4.easeInOut})
                } else {
                    gsap.to(`.${footerMenu.dropClass}Catalog`, {duration: .2, height: 0, ease: Power4.easeInOut})
                    gsap.fromTo(`.footerCatalogCatalog`, {duration: .2, height: 0, ease: Power4.easeInOut}, {
                        duration: .2,
                        height: 'auto',
                        ease: Power4.easeInOut
                    })
                }
            })
            // For Catalog category End
            // For Type Of Sport category
            $(`.footerTypeOfSport`).click(() => {
                if ($('.footerTypeOfSportCatalog').height() > 0) {
                    gsap.to(`.footerTypeOfSportCatalog`, {duration: .2, height: 0, ease: Power4.easeInOut})
                } else {
                    gsap.to(`.${footerMenu.dropClass}Catalog`, {duration: .2, height: 0, ease: Power4.easeInOut})
                    gsap.fromTo(`.footerTypeOfSportCatalog`, {duration: .2, height: 0, ease: Power4.easeInOut}, {
                        duration: .2,
                        height: 'auto',
                        ease: Power4.easeInOut
                    })
                }
            })
            // For Type Of Sport category End
            // For For-Client category
            $(`.footerForClient`).click(() => {
                if ($('.footerForClientCatalog').height() > 0) {
                    gsap.to(`.footerForClientCatalog`, {duration: .2, height: 0, ease: Power4.easeInOut})
                } else {
                    gsap.to(`.${footerMenu.dropClass}Catalog`, {duration: .2, height: 0, ease: Power4.easeInOut})
                    gsap.fromTo(`.footerForClientCatalog`, {duration: .2, height: 0, ease: Power4.easeInOut}, {
                        duration: .2,
                        height: 'auto',
                        ease: Power4.easeInOut
                    })
                }
            })
            // For For-Client category End
            // For About Company category
            $(`.footerAboutCompany`).click(() => {
                if ($('.footerAboutCompanyCatalog').height() > 0) {
                    gsap.to(`.footerAboutCompanyCatalog`, {duration: .2, height: 0, ease: Power4.easeInOut})
                } else {
                    gsap.to(`.${footerMenu.dropClass}Catalog`, {duration: .2, height: 0, ease: Power4.easeOut})
                    gsap.fromTo(`.footerAboutCompanyCatalog`, {duration: .2, height: 0, ease: Power4.easeOut}, {
                        duration: .2,
                        height: 'auto',
                        ease: Power4.easeOut
                    })
                }
            })
            // For About Company category End
        }
        // DROP-DOWN ANIMATION ON CLICK  END
    })

    return (
        <div
            className={[classes.footer_menu_items].join(' ')}
            key={footerMenu.id}
        >
            <p className={[classes.footer_menuTitle, footerMenu.dropClass].join(' ')}>
                {footerMenu.title}
                <FiPlus className={classes.footer_menu_itemPlus}/>
            </p>
            <div
                className={[classes.footer_menu_link_content, footerMenu.dropClass + 'Catalog'].join(' ')}
            >
                {footerMenu.menus.map(footerMenuItem =>
                    <Link to={footerMenuItem.link.toLowerCase()} className={classes.footer_menuItem}
                          key={footerMenuItem.id}>{footerMenuItem.name}</Link>
                )
                }
            </div>
        </div>
    );
};

export default FooterMenuItem;