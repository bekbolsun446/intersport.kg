import React from 'react';
import classes from "./HeaderMenu.module.scss";
import {HiOutlineArrowNarrowRight} from "@react-icons/all-files/hi/HiOutlineArrowNarrowRight";

const HeaderMenu = (props) => {
    const {headermenu,id} = props;

    return (
        <div {...props} id={id} className={[classes.header_menu_drop].join(' ')}>
            <div className={classes.header_drop_img}>
                <div className={classes.header_drop_img_content}>
                    <img src={headermenu.img}/>
                    <a className={classes.header_drop_imgLink} href={headermenu.imgLink}>
                        Мужское
                        <HiOutlineArrowNarrowRight className={classes.header_drop_imgIcon}/>
                    </a>
                </div>
            </div>
            <div className={classes.header_drop_content}>
                <div className={classes.header_drop_link_content}>
                    <div className={classes.header_drop_content_item}>
                        {headermenu.bigLink.map(links =>
                            <a href={links.link} key={links.id} className={classes.header_drop_link}>{links.name}</a>
                        )
                        }
                        <a href="#" className={classes.header_drop_lastLink}>Все товары для мужчин</a>
                    </div>
                    {headermenu.typeLink.map(headerMenu =>
                        <div className={classes.header_drop_content_item} key={headerMenu.id}>
                            <p className={classes.header_drop_itemTitle}>{headerMenu.title}</p>
                            {
                                headerMenu.links.map(headerLinks =>
                                    <a href={headerLinks.link} key={headerLinks.id}
                                       className={classes.header_drop_typeLinks}>{headerLinks.name}</a>
                                )
                            }
                            <a href="#" className={classes.header_drop_lastLink}>Смотреть все</a>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default HeaderMenu;