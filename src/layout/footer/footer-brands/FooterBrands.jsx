import React from 'react';
import classes from "./FooterBrands.module.scss";
import Slider from "react-slick";
import {Link} from "react-router-dom";

const FooterBrands = (props) => {
    const {brands} = props;
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1189,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            }
        ]
    };
    return (
        <div className={classes.footer_brands}>
            <h3 className={classes.footer_brandsTitle}>Бренды</h3>
            <div className={classes.footer_brands_content}>
                <Slider {...settings}>
                    {brands.map((brand) =>
                        <Link to={`/catalog/brand=${brand.name}`.toLocaleLowerCase()} key={brand.id} className={classes.footer_brand}>
                            <img src={brand.img} alt=""/>
                        </Link>
                    )}
                </Slider>
            </div>
        </div>
    );
};

export default FooterBrands;