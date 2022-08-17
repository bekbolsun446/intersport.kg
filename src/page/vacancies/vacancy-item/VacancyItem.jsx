import React from 'react';
import classes from "./VacancyItem.module.scss";
import {Link} from "react-router-dom";
import {BsArrowRight} from 'react-icons/bs'

const VacancyItem = (props) => {
    const {vacancy} = props
    return (
        <div className={classes.vacancy_item}>
            <div className={classes.vacancy_item_img}>
                <img className={classes.vacancy_item_imgItem}
                     src={vacancy.img}
                     alt=""/>
            </div>
            <h3 className={classes.vacancy_item_name_content}>
                {vacancy.name}
                <BsArrowRight className={classes.vacancy_itemIcon}/>
            </h3>
            <Link to={vacancy.link} className={classes.vacancy_itemLink}/>
        </div>
    );
};

export default VacancyItem;