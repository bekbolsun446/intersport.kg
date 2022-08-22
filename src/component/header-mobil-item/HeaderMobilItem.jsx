import React from 'react';
import classes from "./HeaderMobilItem.module.scss";
import {Link} from "react-router-dom";

const HeaderMobilItem = (props) => {
    const {link, className, children} = props;
    return (
        <Link {...props} to={link ? link.toLowerCase() : ''}
              className={[classes.header_mobilItem, className && className].join(' ')}>
            {children}
        </Link>
    );
};

export default HeaderMobilItem;