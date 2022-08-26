import React from 'react';
import classes from "./MainCategorySlide.module.scss";
import Slider from "react-slick";
import {Link} from 'react-router-dom'

const MainCategorySlide = (props) => {
    const {} = props

    const mainCategories = [
        {
            id: 1,
            title: 'Ветровки',
            link: 'Ветровка',
            img: 'https://intersport.kg/media/WEBP/d0/181ef0/media/slider_images/%D0%92%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%BA%D0%B8.webp'
        },
        {
            id: 2,
            title: 'Футболки и шорты',
            link: 'Футболка и шорта',
            img: 'https://intersport.kg/media/WEBP/0c/2751b8/media/slider_images/DSC_1789.webp'
        },
        {
            id: 3,
            title: 'Кепки',
            link: 'Кепка',
            img: 'https://intersport.kg/media/WEBP/83/602066/media/slider_images/DSC_1745.webp'
        },
        {
            id: 4,
            title: 'Кроссовки',
            link: 'КРОССОВКИ',
            img: 'https://static.nike.com/a/images/t_PDP_1280_v1/78e78695-74ab-4162-b052-67f004aad13b/air-max-270-g-golf-ayakkab%C4%B1s%C4%B1-gTpCFg.jpg'
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            },
        ]
    };

    return (
        <div className={classes.main_slide}>
            <Slider {...settings}>
                {mainCategories.map(category =>
                    <div className={classes.main_slide_item} key={category.id}>
                        <Link
                            to={`/catalog/typeName=${category.link}`.toLocaleLowerCase()}
                            className={classes.main_slide_itemLink}
                        ></Link>
                        <h4 className={classes.main_slide_itemTitle}>{category.title}</h4>
                        <img src={category.img} alt="" className={classes.main_slide_itemImg}/>
                    </div>
                )}
            </Slider>
        </div>
    );
};

export default MainCategorySlide;