import React from 'react';
import classes from "./InputUI.module.scss";

const InputUi = (props) => {
    const {className, required} = props;
    return (
        <input
            {...props}
            required={required === false ? required : true}
            className={[classes.input_ui, className].join(' ')}
        />
    );
};

export default InputUi;