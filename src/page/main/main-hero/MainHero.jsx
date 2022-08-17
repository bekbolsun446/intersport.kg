import React from 'react';
import classes from "./MainHero.module.scss";
import MyButton from "../../../component/UI/my_button/MyButton";
import Slider from "react-slick";

const MainHero = (props) => {
    const {} = props
    const settings = {
        className: 'main_hero_slider',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div className={classes.main_hero}>
                <img src="https://intersport.kg/media/slider_images/%D0%98%D0%A11.jpg" alt=""/>
                <MyButton children='Catalog'/>
            </div>
            <div className={classes.main_hero}>
                <img src="https://intersport.kg/media/slider_images/%D0%98%D0%A1kid_J8l5XpP_1.jpeg" alt=""/>
                <MyButton children='Catalog'/>
            </div>
        </Slider>
    );
};

export default MainHero;