import React, {useEffect} from 'react';
import classes from "./Modal.module.scss";
import './modal.scss'
import {GrClose} from "react-icons/gr";
import $ from 'jquery'

const Modal = (props) => {
    const {children, toggleShow} = props;

    return (<>
        <div className={classes.modal}>
            <div className={classes.modal_content}>
                <GrClose onClick={toggleShow} className={classes.modal_close}/>
                <div className={classes.modal_body}>
                    {children}
                </div>
            </div>
        </div>
    </>);
};

export default Modal;