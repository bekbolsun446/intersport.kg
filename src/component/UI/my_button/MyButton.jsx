import React from 'react';
import classes from "./MyButton.module.scss";

const MyButton = (props) => {
    const {children} = props
    return (
        <button
            className={[classes.myButton, props.className].join(' ')}
            {...props}>
            {children}
        </button>
    );
};

export default MyButton;