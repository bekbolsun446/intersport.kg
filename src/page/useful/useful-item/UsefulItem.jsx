import React, {useContext, useEffect} from 'react';
import classes from './UsefulItem.module.scss'
import {useParams} from "react-router-dom";
import PageHead from "../../../component/page-head/PageHead";
import {MyContext} from "../../../provider/Provider";
import UsefulCurrentItem from "./useful-current-item/UsefulCurrentItem";
import OtherItems from "./other-items/OtherItems";

const UsefulItem = () => {
    const {name} = useParams();

    const context = useContext(MyContext)
    const usefulItems = context.useful
    const currentUseful = usefulItems.filter(useful => useful.name.toLowerCase().includes(name))[0]
    const otherUsefulItems = usefulItems.filter(useful => !useful.name.toLowerCase().includes(name))
    const prevPages = [
        {
            id: 1,
            name: 'Полезное',
            link: '/useful'
        }
    ]

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [name]);

    return (
        <div className={classes.useful_item}>
            <PageHead prevPages={prevPages} currentPage={name}/>
            <h2 className={classes.useful_itemTitle}>{currentUseful.name && currentUseful.name}</h2>
            <div className={classes.useful_item_content}>
                <UsefulCurrentItem currentUseful={currentUseful}/>
                <div className={classes.other_items}>
                    <OtherItems otherUsefulItems={otherUsefulItems}/>
                </div>
            </div>
        </div>
    );
};

export default UsefulItem;