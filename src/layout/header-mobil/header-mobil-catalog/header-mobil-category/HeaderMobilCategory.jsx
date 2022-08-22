import React, {useContext, useEffect, useState} from 'react';
import classes from "./HeaderMobilCategory.module.scss";
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import {gsap} from "gsap";
import $ from 'jquery'
import HeaderMobilSubcategory from "./header-mobil-subcategory/HeaderMobilSubcategory";
import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {MyContext} from "../../../../provider/Provider";

const HeaderMobilCategory = (props) => {
    const {category} = props;
    const id = category.id
    const context = useContext(MyContext);
    const toggleMobileHeader = context.mobileHeader.toggleMobileHeader
    const [isShow, setIsShow] = useState(false)


    const showDropCategory = () => {
        if (!isShow) {
            gsap.to('.subcategory_content', {height: 0, duration: .2})
            gsap.to('.category_content', {height: 0, duration: .2})
            gsap.to(`.category_content${id}`, {height: 'auto', duration: .2})
            setIsShow(true)
        } else {
            gsap.to(`.category_content${id}`, {height: 0, duration: .2})
            gsap.to('.subcategory_content', {height: 0, duration: .2})
            setIsShow(false)
        }
    }

    return (
        <div className={classes.header_mobil_category}>
            <span
                onClick={showDropCategory}
                className={[classes.header_mobil_categoryHover, `categoryShow${id}`].join(' ')}
            >
                {category.name}
                {isShow ?
                    <AiOutlineMinus className={classes.header_mobil_categoryIcon}/>
                    :
                    <AiOutlinePlus className={classes.header_mobil_categoryIcon}/>
                }
            </span>
            <ul className={[classes.header_mobil_category_content, 'category_content', `category_content${id}`].join(' ')}>
                {category.typeLink && category.typeLink.map(subCategory =>
                    <li key={subCategory.id} className={classes.header_mobil_category_Item}>
                        <HeaderMobilSubcategory category={category} toggleMobileHeader={toggleMobileHeader} subCategory={subCategory}/>
                    </li>
                )}
                <div className={classes.header_mobil_category_img}>
                    <img
                        src={category.img}
                        alt={category.name}
                    />
                    <Link
                        onClick={toggleMobileHeader}
                        to={`/catalog/category=${category.name}`.toLowerCase()}
                        className={classes.header_mobil_category_imgLink}
                    >
                        {category.name}
                        <HiOutlineArrowNarrowRight className={classes.header_mobil_categoryImgIcon}/>
                    </Link>
                </div>
            </ul>
        </div>
    );
};

export default HeaderMobilCategory;