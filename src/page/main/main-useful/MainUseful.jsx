import React from 'react';
import classes from "./MainUseful.module.scss";
import MainHead from "../main_head/MainHead";
import Slider from "react-slick";

const MainUseful = (props) => {
    const {} = props

    const mainUseful = [
        {
            id: 1,
            name: 'Символы на ярлыках одежды, что они значат?',
            img: 'https://intersport.kg/media/WEBP/8e/6013b6/media/%D0%AF%D1%80%D0%BB%D1%8B%D0%BA-%D0%BD%D0%B0-%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D0%B5.webp',
            link: '#',
            date: '29 Октябрь 2021'
        },
        {
            id: 2,
            name: 'Инструкция по эксплуатации обуви',
            img: 'https://intersport.kg/media/WEBP/49/ba1e18/media/%D0%A3%D1%85%D0%BE%D0%B4-%D0%B7%D0%B0-%D0%BE%D0%B1%D1%83%D0%B2%D1%8C%D1%8E-620%D1%85640px-1.webp',
            link: '#',
            date: '28 Октябрь 2021'
        },
        {
            id: 3,
            name: 'Почему стоит начать бегать?',
            img: 'https://intersport.kg/media/WEBP/cc/2d0fe9/media/%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83-%D0%BD%D1%83%D0%B6%D0%BD%D0%BE-%D0%B1%D0%B5%D0%B3%D0%B0%D1%82%D1%8C-1-min_2hKZGPD.webp',
            link: '#',
            date: '19 Октябрь 2021'
        },
        {
            id: 4,
            name: 'Как выбрать кроссовки для бега?',
            img: 'https://intersport.kg/media/WEBP/5b/9a4119/media/adidas-celebrate-the-iconic-innovation-with-the-most-responsive-shoes_3.webp',
            link: '#',
            date: '22 Октябрь 2020'
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
        <div>
            <MainHead title={'ПОЛЕЗНОЕ'} link={'#'} linkTitle={'ЧИТАТЬ ВСЕ'}/>
            <div className={classes.main_useful}>
                <Slider {...settings}>
                    {mainUseful.map(useful =>
                        <div key={useful.id} className={classes.main_useful_item}>
                            <div className={classes.main_useful_item_img}>
                                <img src={useful.img} alt={useful.name}/>
                            </div>
                            <div className={classes.main_useful_item_body}>
                                <h5 className={classes.main_useful_itemTitle}>{useful.name}</h5>
                                <p className={classes.main_useful_itemDate}>{useful.date}</p>
                            </div>
                            <a href={useful.link} className={classes.main_useful_itemLink}></a>
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    );
};

export default MainUseful;