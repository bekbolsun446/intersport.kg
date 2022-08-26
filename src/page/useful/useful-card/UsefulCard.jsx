import React, {useState} from 'react';
import classes from "./UsefulCard.module.scss";
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import {AiOutlineLine} from "react-icons/ai";

const UsefulCard = (props) => {
    const {useful} = props;

    const [show, setShow] = useState(false)


    const toggleShow = () => {
        setShow(true)
    }
    const toggleHide = () => {
        setShow(false)
    }

    return (
        <Link
            to={`/useful/${useful.name}`.toLocaleLowerCase()}
            className={classes.useful_card}
            onMouseOver={toggleShow}
            onMouseLeave={toggleHide}
        >
            <div className={classes.useful_cardBgDark}></div>
            <img
                src={useful.img && useful.img}
                alt=""/>
            <div className={classes.useful_card_body}>
                <div>
                    <p className={classes.useful_cardName}>
                        {useful.name && useful.name}
                    </p>
                    <p
                        className={classes.useful_cardTime}
                    >
                        {useful.time && useful.time}
                    </p>
                </div>
                {show ?
                    <BsArrowRight className={classes.useful_cardIcon}/>
                    :
                    <AiOutlineLine className={classes.useful_cardIcon}/>
                }
            </div>
        </Link>
    );
};

export default UsefulCard;