import React from 'react';
import classes from "./FooterPay.module.scss";

const FooterPay = (props) => {
    const {payingType} = props
    return (
        <div className={classes.footer_pay}>
            <p className={classes.footer_payTitle}>Способы оплаты:</p>
            <div className={classes.footer_pay_content}>
                {payingType.map((img) =>
                    <img src={img} className={classes.footer_payImg} key={img} alt=""/>
                )}
            </div>
        </div>
    );
};

export default FooterPay;