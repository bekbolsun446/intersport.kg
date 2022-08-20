import React from 'react';
import classes from "./HeaderMenu.module.scss";
import {HiOutlineArrowNarrowRight} from "@react-icons/all-files/hi/HiOutlineArrowNarrowRight";
import {Link} from "react-router-dom";

const HeaderMenu = (props) => {
    const {headermenu, id} = props;

    return (
        <div {...props} id={id} className={[classes.header_menu_drop].join(' ')}>
            <div className={classes.header_drop_img}>
                <div className={classes.header_drop_img_content}>
                    <img src={headermenu.img}/>
                    <Link className={classes.header_drop_imgLink} to={headermenu.imgLink}>
                        Мужское
                        <HiOutlineArrowNarrowRight className={classes.header_drop_imgIcon}/>
                    </Link>
                </div>
            </div>
            <div className={classes.header_drop_content}>
                <div className={classes.header_drop_link_content}>
                    <div className={classes.header_drop_content_item}>
                        {headermenu.bigLink.map(links =>
                            <Link
                                to={links.link} key={links.id}
                                className={classes.header_drop_link}>{links.name}
                            </Link>
                        )
                        }
                    </div>
                    {headermenu.typeLink.map(headerMenu =>
                        <div className={classes.header_drop_content_item} key={headerMenu.id}>
                            <p className={classes.header_drop_itemTitle}>{headerMenu.title}</p>
                            {headerMenu.links.map(headerLinks =>
                                <Link
                                    to={`/catalog/${headerLinks.name}`} key={headerLinks.id}
                                    className={classes.header_drop_typeLinks}>{headerLinks.name}
                                </Link>
                            )
                            }
                            <Link
                                to={`/catalog/${headerMenu.title}`}
                                className={classes.header_drop_lastLink}>Смотреть все</Link>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default HeaderMenu;