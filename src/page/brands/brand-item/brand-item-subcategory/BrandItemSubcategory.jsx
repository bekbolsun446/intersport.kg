import React,{useState} from 'react';
import classes from "./BrandItemSubcategory.module.scss";
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import {AiOutlineLine} from "react-icons/ai";

const BrandItemSubcategory = (props) => {
    const {subcategory, brand} = props;

    const [isShow, setIsShow] = useState(false)

    const toggleIsShow = () => {
        setIsShow(true)
    }
    const toggleIsHide = () => {
        setIsShow(false)
    }

    return (
        <Link
            onMouseOver={toggleIsShow}
            onMouseLeave={toggleIsHide}
            to={`/catalog/brand=${brand},subcategory=${subcategory}`.toLocaleLowerCase()}
            className={classes.brand_item_subcategory}
        >
            <img src="https://intersport.kg/static/img/png/image.png" alt=""/>
            <p
                className={classes.brand_item_subcategoryName}
            >
                {subcategory}
                {isShow ?
                    <BsArrowRight className={classes.brand_itemIcon}/>
                    :
                    <AiOutlineLine className={classes.brand_itemIcon}/>
                }
            </p>
        </Link>
    );
};

export default BrandItemSubcategory;