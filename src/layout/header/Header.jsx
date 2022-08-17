import React, {useState, useRef, useContext} from 'react';
import classes from "./Header.module.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, NavLink} from "react-router-dom";
import {SearchOutlined, HeartOutlined, ShoppingOutlined, CloseOutlined} from "@ant-design/icons";
import HeaderDropMenuCatalog from "./header_drop_menu_catalog/HeaderDropMenuCatalog";
import HeaderSearchLists from "./header-search-lists/HeaderSearchLists";
import HeaderCatalog from "./header-catalog/HeaderCatalog";
import {MyContext} from "../../provider/Provider";

const Header = (props) => {
    const context = useContext(MyContext)

    const products = context.products

    const [headerLinks, setHeaderLink] = useState([
        {
            id: 1,
            name: 'БРЕНДЫ',
            link: 'catalog',
            style: {}
        },
        {
            id: 2,
            name: 'НОВИНКИ',
            link: 'catalog',
            style: {}
        },
        {
            id: 3,
            name: 'СКИДКИ%',
            link: 'catalog',
            style: {
                color: 'red'
            }
        }
    ])

    const [isShown, setIsShown] = useState({
        search: false
    })
    const [headerSearch, setHeaderSearch] = useState('')
    let searchList = products.filter(product => product.name.toLowerCase().includes(headerSearch.toLowerCase()))


    function handleSearch(e) {
        setHeaderSearch(e.target.value)
    }

    function searchShow() {
        setIsShown({
            ...isShown,
            search: !isShown.search
        })
        setHeaderSearch('')
    }


    return (
        <header className={classes.header}>
            <div className={classes.header_bg}>
                <div className="container">
                    <div className={classes.header_content}>
                        <HeaderDropMenuCatalog isShown={isShown}/>
                        <Link to='/' className={classes.header_menu}>
                            <img src="https://intersport.kg/static/new_static/img/png/logo.png"
                                 className={classes.headerLogo} alt=""/>
                        </Link>
                        <HeaderCatalog headerLinks={headerLinks} isShown={isShown} searchShow={searchShow} headerSearch={headerSearch} handleSearch={handleSearch}/>
                        <Link to={''} className={classes.headerLikeLink}><HeartOutlined className={classes.headerIcons}/></Link>
                    </div>
                </div>
                {isShown.search &&
                  <HeaderSearchLists searchList={searchList}/>
                }
            </div>
        </header>
    );

};


export default Header;


