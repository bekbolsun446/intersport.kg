import React from 'react';
import classes from "./ProductContent.module.scss";
import Slider from "react-slick";
import './productcontent.scss'
import ProductContentUseful from "./product-content-useful/ProductContentUseful";

const ProductContent = (props) => {
    const {product} = props;

    const useful = {
        title: 'Доставка и оплата',
        description: 'Интернет-магазин спортивной одежды предлагает широкий ассортимент мужской и женской одежды и аксессуаров для спорта. Футболки, толстовки, рубашки, спортивные костюмы и кроссовки можно купить с доставкой в любой город – курьерской службой.Срок доставки зависит от выбранного Вами региона, который Вы сможете узнать при оформлении заказа у менеджера.В момент передачи товара, покупатель получает от продавца следующие документы к товару: кассовый чек, накладная',
        lists: {
            name: 'Памятка покупателю',
            item: [
                'Покупатель должен обеспечить беспрепятственный пронос доставленного товара',
                'В согласованное время доставки заказа покупатель должен находиться по адресу доставки',
                'При получении товара покупатель должен в присутствии курьера осмотреть товар на наличие комплектации и отсутствие внешних дефектов в изделии',
                'После приема товара претензии по поводу внешнего вида и комплектации не принимаются'

            ]
        }
    }

    const settings = {
        className: classes.product_slide_content,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <div className={classes.product_content}>
            <div className={classes.product_hero}>
                <div className={classes.product_img_content}>
                    {product.imgs.map(img =>
                        <div key={img} className={classes.product_img}>
                            <img src={img} alt=""/>
                        </div>
                    )}
                </div>
                <div className={classes.product_slide}>
                    <Slider {...settings}>
                        {product.imgs.map(img =>
                            <img className={classes.product_slideImg} src={img} key={img} alt=""/>
                        )}

                    </Slider>
                </div>
            </div>
            <div className={classes.product_content_useful_content}>
                {product.description && <ProductContentUseful title={'Описание'} description={product.description}/>}
                <ProductContentUseful title={useful.title} description={useful.description} lists={useful.lists}/>
            </div>
        </div>
    );
};

export default ProductContent;