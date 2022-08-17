import React, {useState} from 'react';
import classes from "./LinkTo.module.scss";
import {Link} from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "@react-icons/all-files/hi/HiOutlineArrowNarrowRight";
import { AiOutlineLine } from "@react-icons/all-files/ai/AiOutlineLine";

const LinkTo = ({props, link, linkTitle}) => {
    const [show, setShow] = useState({
        arrow: false
    })

    function showArrow() {
        setShow({
            ...show,
            arrow: true
        })
    }
    function hideArrow() {
        setShow({
            ...show,
            arrow: false
        })
    }

    return (
            <Link onMouseOver={showArrow} onMouseLeave={hideArrow} to={link} className={classes.link}>
                {linkTitle}
                {show.arrow ?
                    <HiOutlineArrowNarrowRight className={classes.link_toArrow}/>
                    :
                    <AiOutlineLine className={classes.link_toArrow}/>
                }
            </Link>
    );
};

export default LinkTo;