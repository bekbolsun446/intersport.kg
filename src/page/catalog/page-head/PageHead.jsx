import React from 'react';
import classes from "./PageHead.module.scss";
import {Link} from "react-router-dom";
import {MdArrowBackIosNew} from "react-icons/md";

const PageHead = (props) => {
    const {} = props;
    return (
        <div className={classes.page_head}>
            <Link to={'..'} className={classes.page_headBackLink}>
                <MdArrowBackIosNew className={classes.page_head_arrowIcon}/>
                НАЗАД
            </Link>
            <Link to={'/'} className={classes.page_headMainLink}>Главная /</Link>
            <Link to={'/catalog'} className={classes.page_headCurrentLink}>Каталог</Link>
        </div>
    );
};

export default PageHead;