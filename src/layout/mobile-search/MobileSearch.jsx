import React, {useContext, useEffect, useState} from 'react';
import classes from "./MobileSearch.module.scss";
import {SearchOutlined} from "@ant-design/icons";
import {GrClose} from 'react-icons/gr'
import {BsArrowUpLeft} from 'react-icons/bs'
import {MyContext} from "../../provider/Provider";
import {Link} from "react-router-dom";

const MobileSearch = () => {
    const context = useContext(MyContext)
    const {showMobileSearch, setShowMobileSearch} = context.mobileSearch
    const products = context.products
    const [headerSearch, setHeaderSearch] = useState('')
    const [searchList, setSearchList] = useState([]);

    const handleSearch = (e) => {
        setHeaderSearch(e.target.value)
        let searchLists = products.filter(product => product.name.toLowerCase().includes(headerSearch.toLowerCase()));
        setSearchList([...searchLists])
    }
    const resetSearch = (e) => {
        e.preventDefault();
        setHeaderSearch(e.target.value)
        setHeaderSearch('')
    }

    useEffect(() => {
        if (!headerSearch) {
            setSearchList([])
        }
    }, [headerSearch])

    return (
        <div className={classes.showMobileSearch}>
            <div className={classes.header_search}>
                <button
                    className={classes.header_searchBtn}
                >
                    <SearchOutlined
                        className={classes.headerIcons}
                    />
                </button>
                <input
                    onChange={handleSearch}
                    value={headerSearch}
                    type="search"
                    placeholder='Я ищу...'

                />
                <button
                    className={classes.header_searchBtn}
                >
                    <GrClose
                        onClick={resetSearch}
                        className={classes.headerIcons}
                    />
                </button>
            </div>
            <div className={classes.mobile_searchLists}>
                {searchList.length > 0 ?
                    searchList.map(product =>
                        <Link
                            onClick={() => setShowMobileSearch(false)}
                            key={product.id}
                            to={`/products/${product.name}`}
                            className={classes.mobile_searchList}
                        >
                            {product.name}
                            <BsArrowUpLeft className={classes.mobile_searchListIcon}/>
                        </Link>
                    )
                    :
                    <p className={classes.mobileSearchNoProduct}>No Product</p>
                }
            </div>
        </div>
    );
};

export default MobileSearch;