import React, {useContext} from 'react';
import classes from "./HeaderCatalog.module.scss";
import {Link} from "react-router-dom";
import {CloseOutlined, HeartOutlined, SearchOutlined, ShoppingOutlined} from "@ant-design/icons";
import {MyContext} from "../../../provider/Provider";

const HeaderCatalog = (props) => {
    const {headerLinks, isShown, searchShow, headerSearch, handleSearch} = props


    const context = useContext(MyContext); // import context from provider
    const allProductsCount = context.allProductsCount // count of products in basket

    return (
        <div className={classes.header_menu}>
            {headerLinks.map(headerLink =>
                <Link to={headerLink.link} key={headerLink.id} style={headerLink.style}
                      className={classes.header_menuLink}>{headerLink.name}</Link>
            )}
            <div className={classes.header_menuLink}>
                {isShown.search
                    ?
                    <button className={classes.header_searchBtn}><CloseOutlined onClick={searchShow}
                                                                                className={classes.headerIcons}/>
                    </button>
                    :
                    <button className={classes.header_searchBtn}><SearchOutlined onClick={searchShow}
                                                                                 className={classes.headerIcons}/>
                    </button>}
                {isShown.search &&
                    <div className={classes.header_search}>
                        <button className={classes.header_searchBtn}><SearchOutlined
                            className={classes.headerIcons}/></button>
                        <input onChange={handleSearch} value={headerSearch} type="search"
                               placeholder='Я ищу...'/>
                    </div>
                }

            </div>
            <Link to="/favorites" className={classes.header_menuLink}>
                <HeartOutlined className={classes.headerIcons}/>
            </Link>
            <Link to="/basket" className={classes.header_menuLink}>
                <ShoppingOutlined className={classes.headerIcons}/>
                <sup>{allProductsCount}</sup>
            </Link>
        </div>
    );
};

export default HeaderCatalog;