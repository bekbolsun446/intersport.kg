import React,{useContext} from 'react';
import classes from "./FooterMenuProfile.module.scss";
import {MyContext} from "../../../../provider/Provider";

const FooterMenuProfile = (props) => {
    const {footerMenu, className} = props

    const context = useContext(MyContext)
    const toggleShowLogin = context.register.toggleShowLogin
    const toggleShowSignup = context.register.toggleShowSignUp
    const toggleRegisterFooter = (name) => {
        if (name == 'Вход') {
            return toggleShowLogin()
        } else if (name == 'Регистрация') {
            return toggleShowSignup()
        }
        return
    }

    return (
        <div className={[classes.footerMenuProfile, className].join(' ')}>
            {footerMenu.menus.map(menu =>
                menu.name == 'Instagram'
                ||
                menu.name == 'Facebook'
                    ?
                    <a
                        key={menu.id}
                        href={menu.link}
                        target={'_blank'}
                    >
                        {menu.name}
                    </a>
                    :
                    <p
                        onClick={() => toggleRegisterFooter(menu.name)}
                        key={menu.id}
                    >
                        {menu.name}
                    </p>
            )}
        </div>
    );
};

export default FooterMenuProfile;