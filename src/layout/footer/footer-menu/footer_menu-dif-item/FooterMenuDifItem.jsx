import React, {useContext} from 'react';
import classes from "./FooterMenuDifItem.module.scss";
import {FiPlus} from "react-icons/fi";
import {Link} from "react-router-dom";
import {MyContext} from "../../../../provider/Provider";

const FooterMenuDifItem = (props) => {
    const {footerMenu, className} = props
    const context = useContext(MyContext)
    const toggleShowLogin = context.register.toggleShowLogin
    const toggleShowSignup = context.register.toggleShowSignUp
    return (
        <div className={[classes.footer_menu_items, className].join(' ')} key={footerMenu.id}>
            <p className={classes.footer_menuTitle}>
                {footerMenu.title}
            </p>
            <div className={
                [classes.footer_menu_link_content].join(' ')
            }>
                {footerMenu.menus.map(footerMenuItem =>
                    <Link
                        to={footerMenuItem.link}
                        className={classes.footer_menuItem}
                        key={footerMenuItem.id}
                        onClick={footerMenuItem.name == 'Вход'
                            ?
                            toggleShowLogin
                            :
                            footerMenuItem.name == 'Регистрация'
                                ?
                                toggleShowSignup
                                : ''
                        }
                    >
                        {footerMenuItem.name}
                    </Link>
                )
                }
            </div>
        </div>
    );
};

export default FooterMenuDifItem;