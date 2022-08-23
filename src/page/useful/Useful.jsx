import React,{useEffect} from 'react';
import classes from "./Useful.module.scss";
import PageHead from "../../component/page-head/PageHead";

const Useful = (props) => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    const {} = props;
    return (
        <div className={classes.useful}>
            <PageHead currentPage={'Полезное'}/>

        </div>
    );
};

export default Useful;