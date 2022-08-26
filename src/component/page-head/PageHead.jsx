import React from 'react';
import classes from "./PageHead.module.scss";
import {Link, NavLink} from "react-router-dom";
import {MdArrowBackIosNew} from "react-icons/md";

const PageHead = (props) => {
    const {currentPage, prevPages, isCatalog} = props;
    return (
        <div className={classes.page_head}>
            <div className={classes.page_head_link_content}>
                <NavLink to={'..'} className={classes.page_headBackLink}>
                    <MdArrowBackIosNew className={classes.page_head_arrowIcon}/>
                    НАЗАД
                </NavLink>
                <Link to={'/'} className={classes.page_headMainLink}>Главная /</Link>
                {prevPages && prevPages.map(page =>
                    <Link key={page.id} to={page.link} className={classes.page_headMainLink}>{page.name} /</Link>
                )}
                <Link to={''} className={classes.page_headCurrentLink}>{currentPage}</Link>
            </div>
            {!isCatalog &&
                <Link to={'/catalog/type=all'} className={classes.page_headToCatalog}>ПЕРЕЙТИ В КАТАЛОГ</Link>
            }
        </div>
    );
};

export default PageHead;