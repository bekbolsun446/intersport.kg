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
            title: 'Ветровки',
            link: 'Ветровка',
            img: 'https://intersport.kg/media/WEBP/d0/181ef0/media/slider_images/%D0%92%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%BA%D0%B8.webp'
        },
        {
            id: 3,
            title: 'Ветровки',
            link: 'Ветровка',
            img: 'https://intersport.kg/media/WEBP/d0/181ef0/media/slider_images/%D0%92%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%BA%D0%B8.webp'
        },
        {
            id: 4,
            title: 'Ветровки',
            link: 'Ветровка',
            img: 'https://intersport.kg/media/WEBP/d0/181ef0/media/slider_images/%D0%92%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%BA%D0%B8.webp'
        }
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
        <div className={[classes.main_slide, 'cardSlide'].join(' ')}>
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