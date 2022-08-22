import React from 'react';
import classes from "./MainHead.module.scss";
import LinkTo from "../../../component/UI/link-to/LinkTo";

const MainHead = (props) => {
    const {title, link, linkTitle} = props
    return (
        <div className={classes.main_head}>
            <h2 className={classes.main_headTitle}>{title}</h2>
            <LinkTo link={`/${link}`.toLowerCase()} linkTitle={linkTitle}/>
        </div>
    );
};

export default MainHead;