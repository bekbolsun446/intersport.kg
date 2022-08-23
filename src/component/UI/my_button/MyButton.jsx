import React from 'react';
import classes from "./MyButton.module.scss";

const MyButton = (props) => {
    const {children,className} = props
    return (
        <button
            {...props}
            className={[classes.myButton, className].join(' ')}
            >
            {children}
        </button>
    );
};

export default MyButton;