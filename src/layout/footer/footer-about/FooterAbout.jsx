import React from 'react';
import classes from "./FooterAbout.module.scss";

const FooterAbout = () => {
    return (
        <div className={classes.footer_about}>
            <h3 className={classes.footer_aboutTitle}>Хотите получать информацию о новинках и скидках?</h3>
            <div className={classes.footer_form}>
                <span className={classes.footer_formTitle}>Подпишитесь на нашу рассылку. Никакого спама)</span>
                <form action="" className={classes.footer_form_content}>
                    <input placeholder="Введите ваш email" className={classes.footer_aboutInput} type="email"
                           autoComplete="true"/>
                    <button className={classes.footer_aboutBtn}>Ok</button>
                </form>
            </div>
        </div>
    );
};

export default FooterAbout;