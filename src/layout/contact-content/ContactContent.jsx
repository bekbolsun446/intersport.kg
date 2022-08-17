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
                    <Link to={''} className={[classes.whatsapp, classes.contact_typesItem].join(' ')}>
                        <BsWhatsapp className={classes.contact_contentIcon}/>
                    </Link>
                    <Link to={''} className={[classes.instagram, classes.contact_typesItem].join(' ')}>
                        <GrInstagram className={classes.contact_contentIcon}/>
                    </Link>
                    <Link to={''} className={[classes.sms, classes.contact_typesItem].join(' ')}>
                        <TiMessages className={classes.contact_contentIcon}/>
                    </Link>
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