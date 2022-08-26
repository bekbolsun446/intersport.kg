import React from 'react';
import classes from "./OtherItems.module.scss";
import {Link} from "react-router-dom";
import {IoIosArrowForward} from 'react-icons/io'

const OtherItems = (props) => {
    const {otherUsefulItems} = props;
    return (
        <div className={classes.other_items_content}>
            <p className={classes.other_items_contentTitle}>Полезные ссылки</p>
            {otherUsefulItems && otherUsefulItems.map(item =>
                <Link
                    key={item.id}
                    to={item.name && `/useful/${item.name}`.toLocaleLowerCase()}
                    className={classes.other_item}
                >
                    {item.name && item.name}
                    <IoIosArrowForward className={classes.other_itemsIcon}/>
                </Link>
            )}
        </div>
    );
};

export default OtherItems;