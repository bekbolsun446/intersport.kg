import React, {useContext} from 'react';
import classes from "./MainUseful.module.scss";
import MainHead from "../main_head/MainHead";
import Slider from "react-slick";
import {MyContext} from "../../../provider/Provider";
import {Link} from "react-router-dom";

const MainUseful = (props) => {
    const {} = props
    const context = useContext(MyContext)
    const useful = context.useful
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
            <MainHead title={'ПОЛЕЗНОЕ'} link={'useful'} linkTitle={'ЧИТАТЬ ВСЕ'}/>
            <div className={[classes.main_useful, 'cardSlide'].join(' ')}>
                <Slider {...settings}>
                    {useful.map(useful =>
                        <div key={useful.id} className={classes.main_useful_item}>
                            <div className={classes.main_useful_item_img}>
                                <img
                                    src={useful.img && useful.img}
                                    alt={useful.name && useful.name}
                                />
                            </div>
                            <div className={classes.main_useful_item_body}>
                                <h5 className={classes.main_useful_itemTitle}>{
                                    useful.name && useful.name.length > 70 ?
                                        useful.name.slice(0, 71) + '...'
                                        :
                                        useful.name
                                }</h5>
                                <p className={classes.main_useful_itemDate}>{useful.time && useful.time}</p>
                            </div>
                            <Link
                                to={`/useful/${useful.name}`.toLocaleLowerCase()}
                                className={classes.main_useful_itemLink}
                            >
                            </Link>
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    );
};

export default MainUseful;