import React from 'react';
import classes from "./FooterMenuProfile.module.scss";
import {Link} from "react-router-dom";

const FooterMenuProfile = (props) => {
    const {footerMenu,className} = props
    return (
        <div className={[classes.footerMenuProfile,className].join(' ')}>
            {footerMenu.menus.map(menu =>
                <Link onClick={menu.onClick} key={menu.id} to={menu.link}>{menu.name}</Link>
            )}
        </div>
    );
};

export default FooterMenuProfile;