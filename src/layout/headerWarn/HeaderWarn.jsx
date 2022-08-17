import React, {useState} from 'react';
import classes from "./Headerwarn.module.scss";
import {Link, NavLink} from "react-router-dom";
import product from "../../page/product/Product";


const HeaderWarn = (props) => {
    const {className} = props;
    const [headerWarn, setHeaderWarn] = useState([
        {
            id: 1,
            name: 'Доставка и оплата',
            link: `catalog`
        }, {
            id: 2,
            name: 'Обмен и возврат',
            link: 'product'
        },
        {
            id: 3,
            name: 'Полезное',
            link: '/'
        },
        {
            id: 4,
            name: 'Вакансии',
            link: 'vacancies'
        }
    ])

    return (
        <div className={className}>
            <div className="container">
                <div className={classes.header_warn}>
                    <div className={classes.warn_menu}>
                        {headerWarn.map(warn =>
                            <NavLink to={warn.link} key={warn.id}
                                     className={ classes.warn_menuItem}>{warn.name}</NavLink>
                        )}
                    </div>
                    <div className={classes.warn_menu}>
                        <span draggable={false} className={classes.warn_menuItem}>Профиль</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderWarn;