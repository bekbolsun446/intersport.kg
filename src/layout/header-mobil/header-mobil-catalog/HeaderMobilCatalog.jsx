import React, {useContext} from 'react';
import classes from "./HeaderMobilCatalog.module.scss";
import HeaderMobilCatalogDrop from "./header-mobil-category/HeaderMobilCategory";
import {MyContext} from "../../../provider/Provider";

const HeaderMobilCatalog = (props) => {
    const {} = props;
    const context = useContext(MyContext);
    const categories = context.categories;

    return (
        <div className={classes.header_mobil_catalog}>
            <HeaderMobilCatalogDrop category={categories.men}/>
            <HeaderMobilCatalogDrop category={categories.women}/>
            <HeaderMobilCatalogDrop category={categories.children}/>
        </div>
    );
};

export default HeaderMobilCatalog;