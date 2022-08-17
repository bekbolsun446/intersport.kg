import React from 'react';
import classes from "./ProductContenUseful.module.scss";

const ProductContentUseful = () => {
    return (
        <div className={classes.product_content_useful}>
            <h2 className={classes.product_content_usefulTitle}>Доставка и оплата</h2>
            <p className={classes.product_content_usefulBody}>
                Интернет-магазин спортивной одежды предлагает широкий ассортимент мужской и женской
                одежды и
                аксессуаров для спорта. Футболки, толстовки, рубашки, спортивные костюмы и кроссовки
                можно
                купить с доставкой в любой город – курьерской службой.
                <br/>
                <br/>
                Срок доставки зависит от выбранного Вами региона, который Вы сможете узнать при
                оформлении
                заказа у менеджера.
                <br/>
                <br/>
                <span className={classes.product_content_usefulUnderlined}>
                                В момент передачи товара, покупатель получает от продавца следующие документы к товару: кассовый чек, накладная
                            </span>

            </p>
            <p className={classes.product_content_usefulLiTitle}>Памятка покупателю</p>
            <ul>
                <li>Покупатель должен обеспечить беспрепятственный пронос доставленного товара;</li>
                <li>В согласованное время доставки заказа покупатель должен находиться по адресу
                    доставки;
                </li>
                <li>При получении товара покупатель должен в присутствии курьера осмотреть товар на
                    наличие
                    комплектации и отсутствие внешних дефектов в изделии.
                </li>
                <li>После приема товара претензии по поводу внешнего вида и комплектации не
                    принимаются.
                </li>
            </ul>
        </div>
    );
};

export default ProductContentUseful;