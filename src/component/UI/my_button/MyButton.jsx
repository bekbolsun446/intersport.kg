import React from 'react';
import classes from "./MyButton.module.scss";

const MyButton = (props) => {
    const {children, className} = props
    return (
        <button
            className={[classes.myButton, className].join(' ')}
            {...props}>
            {children}
        </button>
    );
};

export default MyButton;