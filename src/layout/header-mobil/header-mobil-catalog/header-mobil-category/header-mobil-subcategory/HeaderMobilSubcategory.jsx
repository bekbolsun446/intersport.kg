import React, {useEffect, useState} from 'react';
import classes from "./HeaderMobilSubcategory.module.scss";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {gsap} from "gsap";
import {Link} from "react-router-dom";

const HeaderMobilSubcategory = (props) => {
    const {subCategory, toggleMobileHeader, category} = props;
    const id = `${subCategory.id}Sub`
    const [isShow, setIsShow] = useState(false)


    const showDropCategory = () => {
        if (!isShow) {
            gsap.to('.subcategory_content', {height: 0, duration: .2})
            gsap.to(`.subcategory_content${id}`, {height: 'auto', duration: .2})
            setIsShow(true)
        } else {
            gsap.to(`.subcategory_content${id}`, {height: 0, duration: .2})
            setIsShow(false)
        }
    }


    return (
        <div className={classes.header_mobil_subcategory}>
         <span
             className={[classes.header_mobil_subcategoryHover, `subcategoryShow${id}`].join(' ')}
             onClick={showDropCategory}
         >
               {subCategory.title}
             {isShow ?
                 <AiOutlineMinus className={classes.header_mobil_subcategoryIcon}/>
                 :
                 <AiOutlinePlus className={classes.header_mobil_subcategoryIcon}/>
             }
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