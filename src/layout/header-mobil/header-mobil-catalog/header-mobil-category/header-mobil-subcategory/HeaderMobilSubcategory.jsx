import React, {useEffect, useState} from 'react';
import classes from "./HeaderMobilSubcategory.module.scss";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {gsap} from "gsap";
import {Link} from "react-router-dom";
import {MdOutlineArrowForwardIos} from "react-icons/md";
import $ from 'jquery'

const HeaderMobilSubcategory = (props) => {
    const {subCategory, toggleMobileHeader, category} = props;
    const id = `${subCategory.id}Sub`

    let height;

    const showDropCategory = () => {
        height = $(`.subcategory_content${id}`).height()
        if (!height) {
            gsap.to('.subcategory_content', {height: 0, duration: .2})
            gsap.to(`.subcategory_content${id}`, {height: 'auto', duration: .2})
            gsap.to(`.header_mobil_subcategoryIcon`, {rotation: 0, duration: .2})
            gsap.to(`.header_mobil_subcategoryIcon${id}`, {rotation: 90, duration: .2})
        } else {
            gsap.to(`.subcategory_content${id}`, {height: 0, duration: .2})
            gsap.to(`.header_mobil_subcategoryIcon${id}`, {rotation: 0, duration: .2})
        }
    }


    return (
        <div className={classes.header_mobil_subcategory}>
         <span
             className={[classes.header_mobil_subcategoryHover, `subcategoryShow${id}`].join(' ')}
             onClick={showDropCategory}
         >
               {subCategory.title}
             <MdOutlineArrowForwardIos
                 className={[classes.header_mobil_subcategoryIcon, 'header_mobil_subcategoryIcon', `header_mobil_subcategoryIcon${id}`].join(' ')}
             />
            </span>
            <ul className={[classes.header_mobil_subcategory_content, 'subcategory_content', `subcategory_content${id}`].join(' ')}>
                {subCategory.links && subCategory.links.map(link =>
                    <li
                        key={link.id}
                        className={classes.header_mobil_subcategory_Item}
                    >
                        <Link
                            onClick={toggleMobileHeader}
                            to={`/catalog/category=${category.name},typename=${link.name}`.toLowerCase()}
                            className={classes.header_mobil_subcategoryLink}
                        >
                            {link.name}
                        </Link>
                    </li>
                )}
                <li className={classes.header_mobil_subcategory_Item}>
                    <Link
                        onClick={toggleMobileHeader}
                        to={`/catalog/category=${category.name},subcategory=${subCategory.title}`.toLowerCase()}
                        className={[classes.header_mobil_subcategoryLink, classes.header_mobil_subcategoryAllLink].join(' ')}
                    >
                        Смотреть все
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderMobilSubcategory;