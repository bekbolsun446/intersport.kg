import React, {useEffect, useState} from 'react';
import classes from "./FooterMenuItem.module.scss";
import {Link} from "react-router-dom";
import {FiPlus} from "react-icons/fi"
import {gsap, Power4, Linear} from "gsap";
import $ from 'jquery'

const FooterMenuItem = (props) => {
    const {footerMenu} = props


    useEffect(() => {
            // DROP-DOWN ANIMATION ON CLICK
            if ($(window).width() < 992) {
                $(`.${footerMenu.id}Click`).click(() => {
                        let height = $(`.footerMenu${footerMenu.id}Content`).height();
                        if (!height) {
                            gsap.to('.footerMenuContent', {height: 0, duration: .2})
                            gsap.to(`.footerMenu${footerMenu.id}Content`, {height: 'auto', duration: .2})
                        }
                        if (height) {
                            gsap.to(`.footerMenu${footerMenu.id}Content`, {height: 0, duration: .2})
                        }
                    })
            }
            // DROP-DOWN ANIMATION ON CLICK  END
        }
    )

    return (
        <div
            className={[classes.footer_menu_items].join(' ')}
            key={footerMenu.id}
        >
            <p className={[classes.footer_menuTitle, `${footerMenu.id}Click`].join(' ')}>
                {footerMenu.title}
                <FiPlus className={classes.footer_menu_itemPlus}/>
            </p>
            <div
                className={[classes.footer_menu_link_content, `footerMenu${footerMenu.id}Content`, 'footerMenuContent'].join(' ')}
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