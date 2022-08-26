import React, {useState} from 'react';
import classes from "./Footer.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import FooterBrands from "./footer-brands/FooterBrands";
import FooterAbout from "./footer-about/FooterAbout";
import FooterMenu from "./footer-menu/FooterMenu";
import FooterPay from "./footer-pay/FooterPay";
import FooterFoot from "./footer-foot/FooterFoot";

const Footer = () => {

    const [brands, setBrands] = useState([
        {
            id: 1,
            img: 'https://intersport.kg/media/brand_images/adidas-65x30_oBQXKrF.png',
            name: 'Adidas'

        },
        {
            id: 2,
            img: 'https://intersport.kg/media/brand_images/nike-65x30_lIbNBz5.png',
            name: 'Nike'

        },
        {
            id: 3,
            img: 'https://intersport.kg/media/brand_images/EA7_VSIH0Ys.png',
            name: 'EA7'

        },
        {
            id: 4,
            img: 'https://intersport.kg/media/brand_images/boss-65x30_51mAKC9.png',
            name: 'Boss'

        },
        {
            id: 5,
            img: 'https://intersport.kg/media/brand_images/puma-65x30.png',
            name: 'Puma'

        },
        {
            id: 6,
            img: 'https://intersport.kg/media/brand_images/reebok-65x30.png',
            name: 'Reebok'

        },
        {
            id: 7,
            img: 'https://intersport.kg/media/brand_images/under-armour-65x30.png',
            name: 'Under Armour'

        },
    ]);

    const [footerMenus, setFooterMenus] = useState([
        {
            id: 1,
            dropClass: 'footerCatalog',
            title: 'Каталог',
            menus: [
                {id: 1, name: 'Мужчинам', link: '/catalog/category=Мужчинам'},
                {id: 2, name: 'Женщинам', link: '/catalog/category=Женщинам'},
                {
                    id: 3,
                    name: 'Детям',
                    link: '/catalog/category=Детям'
                }, {id: 4, name: 'Бренды', link: '/brands'}, {id: 5, name: 'Новинки', link: '/catalog/type=Новинки'}, {
                    id: 6,
                    name: 'Скидки',
                    link: '/catalog/type=Скидки'
                }
            ]
        },
        {
            id: 2,
            dropClass: 'footerTypeOfSport',
            title: 'Виды спорта',
            menus: [
                {id: 1, name: 'Теннис', link: '/catalog/sport=Теннис'},
                {
                    id: 2,
                    name: 'Хайкинг и треккинг',
                    link: '/catalog/sport=Хайкинг и треккинг'
                }, {
                    id: 3,
                    name: 'Тренинг',
                    link: '/catalog/sport=Тренинг'
                }, {id: 4, name: 'Баскетбол', link: '/catalog/sport=Баскетбол'}, {
                    id: 5,
                    name: 'Бег',
                    link: '/catalog/sport=Бег'
                },
                {id: 6, name: 'Гольф', link: '/catalog/sport=Гольф'}, {
                    id: 7,
                    name: 'Lifestyle',
                    link: '/catalog/sport=Lifestyle'
                }, {
                    id: 8,
                    name: 'Аксессуары',
                    link: '/catalog/sport=Аксессуары'
                }, {id: 9, name: 'Плавание', link: '/catalog/sport=Плавание'}, {
                    id: 10,
                    name: 'Автоспорт',
                    link: '/catalog/sport=Автоспорт'
                }
            ]
        },
        {
            id: 3,
            dropClass: 'footerForClient',
            title: 'Покупателю',
            menus: [{id: 1, name: 'Доставка и оплата', link: '/useful/Доставка и оплата'}, {
                id: 2,
                name: 'Обмен и возврат',
                link: '/useful/Обмен и возврат'
            }, {
                id: 3,
                name: 'Полезное',
                link: '/useful'
            }
            ]
        },
        {
            id: 4,
            dropClass: 'footerAboutCompany',
            title: 'О компании',
            menus: [{id: 1, name: 'Контакты', link: 'contact'}, {id: 2, name: 'О компании', link: 'aboutUs'}
            ]
        }
    ]);

    const [payingType, setPayingType] = useState([
        "https://intersport.kg/static/new_static/img/svg/payments/visa.svg",
        "https://intersport.kg/static/new_static/img/svg/payments/mastercard.svg",
        "https://intersport.kg/static/new_static/img/svg/payments/maestro.svg",
        "https://intersport.kg/static/new_static/img/svg/payments/elsom.svg",
        "https://intersport.kg/static/new_static/img/svg/payments/demir.svg",
        "https://intersport.kg/static/new_static/img/svg/payments/owallet.svg"
    ]);

    return (
        <footer className={classes.footer_bg}>
            <div className="container">
                <FooterBrands brands={brands}/>
                <FooterAbout/>
                <FooterMenu footerMenus={footerMenus}/>
                <FooterPay payingType={payingType}/>
                <FooterFoot/>
            </div>
        </footer>
    );
};

export default Footer;