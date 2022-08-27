import React, {useState} from 'react';
import classes from "./FooterAbout.module.scss";

const FooterAbout = () => {
    const [email, setEmail] = useState('')
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const submitEmail = (e) => {
        e.preventDefault();
        if (email.includes('@gmail.com')) {
            console.log(email)
        }
    }

    return (
        <div className={classes.footer_about}>
            <h3 className={classes.footer_aboutTitle}>Хотите получать информацию о новинках и скидках?</h3>
            <div className={classes.footer_form}>
                <span className={classes.footer_formTitle}>Подпишитесь на нашу рассылку. Никакого спама)</span>
                <form
                    action=""
                    className={classes.footer_form_content}
                    onSubmit={submitEmail}
                >
                    <input
                        placeholder="Введите ваш email"
                        className={classes.footer_aboutInput}
                        type="email"
                        value={email}
                        onChange={handleEmail}
                        required={true}
                    />
                    <button
                        onClick={submitEmail}
                        className={classes.footer_aboutBtn}
                    >
                        Ok
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FooterAbout;