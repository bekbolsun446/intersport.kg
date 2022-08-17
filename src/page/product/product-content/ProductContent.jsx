import React from 'react';
import classes from "./ProductContent.module.scss";
import Slider from "react-slick";
import './productcontent.scss'
import ProductContentUseful from "./product-content-useful/ProductContentUseful";

const ProductContent = (props) => {
    const {product} = props;

    const settings = {
        className: classes.product_slide_content,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };
    return (
        <div className={classes.product_content}>
            <div className={classes.product_hero}>
                <div className={classes.product_img_content}>
                    {product.imgs.map(img =>
                        <div key={img} className={classes.product_img}>
                            <img src={img} alt=""/>
                        </div>
                    )}
                </div>
                <div className={classes.product_slide}>
                    <Slider {...settings}>
                        {product.imgs.map(img =>
                            <img className={classes.product_slideImg} src={img} key={img} alt=""/>
                        )}

                    </Slider>
                </div>
            </div>
            <div className={classes.product_content_useful_content}><ProductContentUseful/></div>
        </div>
    );
};

export default ProductContent;