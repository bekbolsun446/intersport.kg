import React, {useContext, useState} from 'react';
import classes from "./HeaderDropMenuCatalog.module.scss";
import {Link} from "react-router-dom";
import {StarOutlined} from "@ant-design/icons";
import HeaderDropMenuContent from "./header_drop_menu_content/HeaderDropMenuContent";
import {MyContext} from "../../../provider/Provider";

const HeaderDropMenuCatalog = (props) => {
    const {} = props
    const context = useContext(MyContext);
    const headerMenus = context.categories


    return (
        <>
            <div>
                <div className={classes.header_menu}>
                    <Link to='#' style={{color: 'red'}} className={classes.header_menuItem}>
                        <StarOutlined className={classes.headerIcons}/>
                        ЗВЕЗДЫ
                    </Link>
                    <p
                        id={'men'}
                        className={classes.header_menuItem}>МУЖЧИНАМ</p>
                    <p
                        id={'women'}
                        className={classes.header_menuItem}>ЖЕНЩИНАМ</p>
                    <p id={'children'}
                       className={classes.header_menuItem}>детям</p>
                </div>
            </div>
            <div className={classes.header_drop_menu}>
                <HeaderDropMenuContent headerMenus={headerMenus}/>
            </div>
        </>
    );
};

export default HeaderDropMenuCatalog;