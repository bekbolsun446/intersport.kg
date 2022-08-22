import React, {useState} from 'react';
import classes from "./FooterMenu.module.scss";
import {Link} from "react-router-dom";
import FooterMenuItem from "./footer-menu-item/FooterMenuItem";
import FooterMenuDifItem from "./footer_menu-dif-item/FooterMenuDifItem";
import FooterMenuProfile from "./footer-menu-profile/FooterMenuProfile";

const FooterMenu = (props) => {
    const {footerMenus} = props;
    const [isShow, setIsShow] = useState({
        1: false,
        2: false,
        3: false,
        4: false
    })




    const socialMedia = {
        id: 1,
        title: 'Соц. сети',
        menus: [{id: 1, name: 'Instagram', link: '#'}, {id: 2, name: 'Facebook', link: '#'}]
    };
    const profile = {
        id: 1,
        title: 'Профиль',
        menus: [{id: 1, name: 'Вход', link: '#', onClick: ''}, {id: 2, name: 'Регистрация', link: '#', onClick: ''}]
    }

    function toggleIsShow(id) {
        setIsShow({
            1: false,
            2: false,
            3: false,
            4: false,
            [id]: !isShow[id]
        })
    }

    return (
        <div className={classes.footer_menu_content}>
            <div className={classes.footer_menu}>
                <FooterMenuProfile footerMenu={profile}/>
                {footerMenus.map(footerMenu =>
                    footerMenu.id <= 5 ?
                        <FooterMenuItem
                            key={footerMenu.id}
                            isShow={isShow}
                            toggleIsShow={toggleIsShow}
                            footerMenu={footerMenu}/>
                        :
                        ''
                )
                }
                <FooterMenuDifItem className={classes.footer_menuSocialMedia} footerMenu={socialMedia}/>
                <FooterMenuProfile footerMenu={socialMedia} className={classes.footer_menuSocial}/>
            </div>
            <FooterMenuDifItem className={classes.footer_menuSocialMedia} footerMenu={profile}/>

        </div>
    );
};

export default FooterMenu;