import React, {useEffect} from 'react';
import classes from "./BasketProductsSelect.module.scss";
import $ from 'jquery';
import {gsap} from "gsap";
import '../../../../product/product-about/productsAbout.scss'

const BasketProductsSelect = (props) => {
    const {id, lists, title, selectCount, idValue} = props

    useEffect(() => {
        $(`.section${id}1`).mouseover(() => {
            gsap.to(`.section${id}`, {height: 'auto', duration: .5})
            // $(`.section${id}`).css('height', 'auto')
        })
        $(`.section${id}1`).mouseleave(() => {
            gsap.to(`.section${id}`, {height: 0, duration: .5})
            // $(`.section${id}`).css('height', '0px')
        })
    })
    return (
        <div className={[classes.basket_product_select, `section${id}1`].join(' ')}>
            <p>{title}: {lists[idValue - 1]}</p>
            <section className={[`section${id}`].join(' ')}>
                {lists && lists.map((list, index) =>
                    <option
                        className={idValue === index + 1 ? classes.basketValueList : ''}
                        onClick={() => selectCount(title == 'Размер' ? 'size' : 'count', index + 1)}
                        key={list}
                    >{list}</option>
                )}
            </section>
        </div>
    );
};

export default BasketProductsSelect;