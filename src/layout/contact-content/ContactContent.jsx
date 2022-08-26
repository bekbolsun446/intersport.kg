import React, {useState} from 'react';
import classes from "./ContactContent.module.scss";
import {BsWhatsapp} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import {TiMessages} from 'react-icons/ti'
import {MdClose} from 'react-icons/md'
import {Link} from "react-router-dom";
import $ from "jquery";


const ContactContent = (props) => {
    const {} = props;
    const [show, setShow] = useState(false);

    function toggleContactShow() {
        setShow(!show)
    }

    if (show) {
        $('body').css('overflow', 'hidden');
    }
    if (!show) {
        $('body').css('overflow', 'auto');
    }

    return (
        <>
            {show && <div onClick={toggleContactShow} className={classes.contact_contentBg}></div>}
            <div className={classes.contact_content}>{
                show &&
                <div className={classes.contact_types}>
                    <a
                        target={'_blank'}
                        href={'https://api.whatsapp.com/send/?phone=996559312090&text&type=phone_number&app_absent=0'}
                        className={[classes.whatsapp, classes.contact_typesItem].join(' ')}
                        onClick={toggleContactShow}
                    >
                        <BsWhatsapp className={classes.contact_contentIcon}/>
                    </a>
                    <a
                        onClick={toggleContactShow}
                        target={'_blank'}
                        href={'https://www.instagram.com/intersport.kg/'}
                        className={[classes.instagram, classes.contact_typesItem].join(' ')}
                    >
                        <GrInstagram className={classes.contact_contentIcon}/>
                    </a>
                </div>
            }
                <div className={classes.contact_open_close}>
                    {!show &&
                        <div onClick={toggleContactShow}
                             className={[classes.contact_open_btn, classes.contact_typesItem].join(' ')}>
                            <TiMessages className={classes.contact_contentIcon}/>
                        </div>
                    }
                    {show &&
                        <div onClick={toggleContactShow}
                             className={[classes.contact_close_btn, classes.contact_typesItem].join(' ')}>
                            <MdClose className={classes.contact_contentIcon}/>
                        </div>
                    }
                </div>
            </div>
        </>

    );
};

export default ContactContent;