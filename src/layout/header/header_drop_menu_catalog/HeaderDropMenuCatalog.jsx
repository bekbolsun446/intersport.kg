import React, {useState} from 'react';
import classes from "./HeaderDropMenuCatalog.module.scss";
import {Link} from "react-router-dom";
import {StarOutlined} from "@ant-design/icons";
import HeaderDropMenuContent from "./header_drop_menu_content/HeaderDropMenuContent";
import {gsap} from "gsap";
import $ from "jquery";

const HeaderDropMenuCatalog = (props) => {
    const {} = props

    const [headerMenus, setHeaderMenus] = useState({
        men: {
            id: 1,
            img: 'https://intersport.kg/media/category_banner/banner1_1_1.jpeg',
            imgLink: '#',
            bigLink: [
                {
                    id: '1',
                    name: 'НОВИНКИ',
                    link: '#'
                },
                {
                    id: '2',
                    name: 'СО СКИДКОЙ',
                    link: '#'
                }
            ],
            typeLink: [
                {
                    id: 1,
                    title: 'Аксессуары',
                    links: [
                        {id: 1, name: 'Барсетка', link: '#'}, {id: 2, name: 'Кепка', link: '#'}, {
                            id: 3,
                            name: 'Мяч',
                            link: '#'
                        }, {id: 4, name: 'Насос', link: '#'}, {id: 5, name: 'Носки', link: '#'}, {
                            id: 6,
                            name: 'Перчатки для фитнеса',
                            link: '#'
                        }, {id: 7, name: 'Сумка', link: '#'}, {id: 8, name: 'Сумочка', link: '#'}
                    ]
                },
                {
                    id: 2,
                    title: 'Одежда',
                    links: [
                        {id: 1, name: 'Ветровка', link: '#'}, {id: 2, name: 'Жилетка', link: '#'}, {
                            id: 3,
                            name: 'Костюм',
                            link: '#'
                        }, {id: 4, name: 'Куртка', link: '#'}, {id: 5, name: 'Лосины', link: '#'}, {
                            id: 6,
                            name: 'Майка',
                            link: '#'
                        }, {id: 7, name: 'Майка BASE', link: '#'}, {id: 8, name: 'Плавки', link: '#'}, {
                            id: 9,
                            name: 'Поло BASE',
                            link: '#'
                        }, {id: 10, name: 'Рубашка', link: '#'}
                    ]
                },
                {
                    id: 3,
                    title: 'Обувь',
                    links: [
                        {id: 1, name: 'Ботинки', link: '#'}, {id: 2, name: 'Бутсы', link: '#'}, {
                            id: 3,
                            name: 'Кроссовки',
                            link: '#'
                        }, {id: 4, name: 'Полуботинки', link: '#'}, {id: 5, name: 'Сандали', link: '#'}, {
                            id: 6,
                            name: 'Сандалии',
                            link: '#'
                        }, {id: 7, name: 'Сланцы', link: '#'}
                    ]
                },
                {
                    id: 4,
                    title: 'Костюмы',
                    links: [
                        {id: 1, name: 'Костюм', link: '#'}
                    ]
                }
            ]
        },
        women: {
            id: 1,
            img: 'https://intersport.kg/media/category_banner/puma_banner_1.jpeg',
            imgLink: '#',
            bigLink: [
                {
                    id: '1',
                    name: 'НОВИНКИ',
                    link: '#'
                },
                {
                    id: '2',
                    name: 'СО СКИДКОЙ',
                    link: '#'
                }
            ],
            typeLink: [
                {
                    id: 1,
                    title: 'Аксессуары',
                    links: [
                        {id: 1, name: 'Барсетка', link: '#'}, {id: 2, name: 'Кепка', link: '#'}, {
                            id: 3,
                            name: 'Мяч',
                            link: '#'
                        }, {id: 4, name: 'Насос', link: '#'}, {id: 5, name: 'Носки', link: '#'}, {
                            id: 6,
                            name: 'Перчатки для фитнеса',
                            link: '#'
                        }, {id: 7, name: 'Сумка', link: '#'}, {id: 8, name: 'Сумочка', link: '#'}
                    ]
                },
                {
                    id: 2,
                    title: 'Одежда',
                    links: [
                        {id: 1, name: 'Ветровка', link: '#'}, {id: 2, name: 'Жилетка', link: '#'}, {
                            id: 3,
                            name: 'Костюм',
                            link: '#'
                        }, {id: 4, name: 'Куртка', link: '#'}, {id: 5, name: 'Лосины', link: '#'}, {
                            id: 6,
                            name: 'Майка',
                            link: '#'
                        }, {id: 7, name: 'Майка BASE', link: '#'}, {id: 8, name: 'Плавки', link: '#'}, {
                            id: 9,
                            name: 'Поло BASE',
                            link: '#'
                        }, {id: 10, name: 'Рубашка', link: '#'}
                    ]
                },
                {
                    id: 3,
                    title: 'Обувь',
                    links: [
                        {id: 1, name: 'Ботинки', link: '#'}, {id: 2, name: 'Бутсы', link: '#'}, {
                            id: 3,
                            name: 'Кроссовки',
                            link: '#'
                        }, {id: 4, name: 'Полуботинки', link: '#'}, {id: 5, name: 'Сандали', link: '#'}, {
                            id: 6,
                            name: 'Сандалии',
                            link: '#'
                        }, {id: 7, name: 'Сланцы', link: '#'}
                    ]
                },
                {
                    id: 4,
                    title: 'Костюмы',
                    links: [
                        {id: 1, name: 'Костюм', link: '#'}
                    ]
                }
            ]
        },
        children: {
            id: 1,
            img: 'https://intersport.kg/media/category_banner/banner1_1_1.jpeg',
            imgLink: '#',
            bigLink: [
                {
                    id: '1',
                    name: 'НОВИНКИ',
                    link: '#'
                },
                {
                    id: '2',
                    name: 'СО СКИДКОЙ',
                    link: '#'
                }
            ],
            typeLink: [
                {
                    id: 1,
                    title: 'Аксессуары',
                    links: [
                        {id: 1, name: 'Барсетка', link: '#'}, {id: 2, name: 'Кепка', link: '#'}, {
                            id: 3,
                            name: 'Мяч',
                            link: '#'
                        }, {id: 4, name: 'Насос', link: '#'}, {id: 5, name: 'Носки', link: '#'}, {
                            id: 6,
                            name: 'Перчатки для фитнеса',
                            link: '#'
                        }, {id: 7, name: 'Сумка', link: '#'}, {id: 8, name: 'Сумочка', link: '#'}
                    ]
                },
                {
                    id: 2,
                    title: 'Одежда',
                    links: [
                        {id: 1, name: 'Ветровка', link: '#'}, {id: 2, name: 'Жилетка', link: '#'}, {
                            id: 3,
                            name: 'Костюм',
                            link: '#'
                        }, {id: 4, name: 'Куртка', link: '#'}, {id: 5, name: 'Лосины', link: '#'}, {
                            id: 6,
                            name: 'Майка',
                            link: '#'
                        }, {id: 7, name: 'Майка BASE', link: '#'}, {id: 8, name: 'Плавки', link: '#'}, {
                            id: 9,
                            name: 'Поло BASE',
                            link: '#'
                        }, {id: 10, name: 'Рубашка', link: '#'}
                    ]
                },
                {
                    id: 3,
                    title: 'Обувь',
                    links: [
                        {id: 1, name: 'Ботинки', link: '#'}, {id: 2, name: 'Бутсы', link: '#'}, {
                            id: 3,
                            name: 'Кроссовки',
                            link: '#'
                        }, {id: 4, name: 'Полуботинки', link: '#'}, {id: 5, name: 'Сандали', link: '#'}, {
                            id: 6,
                            name: 'Сандалии',
                            link: '#'
                        }, {id: 7, name: 'Сланцы', link: '#'}
                    ]
                },
                {
                    id: 4,
                    title: 'Костюмы',
                    links: [
                        {id: 1, name: 'Костюм', link: '#'}
                    ]
                }
            ]
        }
    })

    return (
        <>
            <div>
                <div className={classes.header_menu}>
                    <Link to='#' style={{color: 'red'}} className={classes.header_menuItem}>
                        <StarOutlined className={classes.headerIcons}/>
                        ЗВЕЗДЫ
                    </Link>
                    <p
                        id={'men'}
                        className={classes.header_menuItem}>МУЖЧИНАМ</p>
                    <p
                        id={'women'}
                        className={classes.header_menuItem}>ЖЕНЩИНАМ</p>
                    <p id={'children'}
                       className={classes.header_menuItem}>детям</p>
                </div>
            </div>
            <div className={classes.header_drop_menu}>
                <HeaderDropMenuContent headerMenus={headerMenus} />
            </div>
        </>
    );
};

export default HeaderDropMenuCatalog;