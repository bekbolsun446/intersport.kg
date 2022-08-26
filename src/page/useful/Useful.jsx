import React, {useContext, useEffect} from 'react';
import classes from "./Useful.module.scss";
import PageHead from "../../component/page-head/PageHead";
import UsefulCard from "./useful-card/UsefulCard";
import {MyContext} from "../../provider/Provider";

const Useful = (props) => {

    const context = useContext(MyContext)
    const usefulItems = context.useful

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    const {} = props;
    return (
        <div className={classes.useful}>
            <PageHead currentPage={'Полезное'}/>
            <h2 className={classes.usefulTitle}>Полезное</h2>
            <p className={classes.usefulAbout}>Интересные материалы для покупателей сети мультибрендовых магазинов
                Intersport</p>
            <div className={classes.useful_content}>
                {usefulItems.map(useful =>
                    <UsefulCard key={useful.id} useful={useful}/>
                )}
            </div>
        </div>
    );
};

export default Useful;