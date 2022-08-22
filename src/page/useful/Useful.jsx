import React from 'react';
import classes from "./Useful.module.scss";
import PageHead from "../../component/page-head/PageHead";

const Useful = (props) => {
    const {} = props;
    return (
        <div className={classes.useful}>
            <PageHead currentPage={'Полезное'}/>

        </div>
    );
};

export default Useful;