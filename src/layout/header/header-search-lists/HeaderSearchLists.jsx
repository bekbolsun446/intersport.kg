import React from 'react';
import classes from "./HeaderSearchLists.module.scss";
import {NavLink} from "react-router-dom";
const HeaderSearchLists = (props) => {
    const {searchList}=props
    return (
        <div className={classes.headerSearchContent}>
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