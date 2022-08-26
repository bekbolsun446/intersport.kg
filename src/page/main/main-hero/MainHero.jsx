import React, {useContext} from 'react';
import classes from "./MainHero.module.scss";
import MyButton from "../../../component/UI/my_button/MyButton";
import Slider from "react-slick";
import {MyContext} from "../../../provider/Provider";
import {Link} from "react-router-dom";

const MainHero = (props) => {
    const {} = props
    const context = useContext(MyContext)
    const importantNews = context.importantNews


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
            {importantNews && importantNews.map(important =>
                <div key={important.id} className={classes.main_hero}>
                    <img src={important.img} alt={important.name}/>
                    <Link to={important.link.toLocaleLowerCase()} children='Catalog'/>
                </div>
            )}
        </Slider>
    );
};

export default MainHero;