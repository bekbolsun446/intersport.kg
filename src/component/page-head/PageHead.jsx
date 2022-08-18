import React from 'react';
import classes from "./PageHead.module.scss";
import {Link} from "react-router-dom";
import {MdArrowBackIosNew} from "react-icons/md";

const PageHead = (props) => {
    const {currentPage, prevPages} = props;
    return (
        <div className={classes.page_head}>
            <Link to={'..'} className={classes.page_headBackLink}>
                <MdArrowBackIosNew className={classes.page_head_arrowIcon}/>
                НАЗАД
            </Link>
            {prevPages && prevPages.map(page =>
                <Link key={page.id} to={page.link} className={classes.page_headMainLink}>{page.name} /</Link>
            )}
            <Link to={''} className={classes.page_headCurrentLink}>{currentPage}</Link>
        </div>
    );
};

export default PageHead;