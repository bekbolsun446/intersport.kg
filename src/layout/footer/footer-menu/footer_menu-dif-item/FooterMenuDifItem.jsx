import React from 'react';
import classes from "./FooterMenuDifItem.module.scss";
import {FiPlus} from "react-icons/fi";
import {Link} from "react-router-dom";

const FooterMenuDifItem = (props) => {
    const {footerMenu,className} = props
    return (
        <div className={[classes.footer_menu_items,className].join(' ')} key={footerMenu.id}>
            <p className={classes.footer_menuTitle}>
                {footerMenu.title}
            </p>
            <div className={
                [classes.footer_menu_link_content].join(' ')
            }>
                {footerMenu.menus.map(footerMenuItem =>
                    <Link to={footerMenuItem.link} className={classes.footer_menuItem}
                          key={footerMenuItem.id}>{footerMenuItem.name}</Link>
                )
                }
            </div>
        </div>
    );
};

export default FooterMenuDifItem;