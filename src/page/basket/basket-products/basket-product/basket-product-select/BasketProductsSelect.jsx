import React, {useEffect} from 'react';
import classes from "./BasketProductsSelect.module.scss";
import $ from 'jquery';
import {gsap} from "gsap";

const BasketProductsSelect = (props) => {
    const {id, lists, title, name, selectCount, idValue} = props

    useEffect(() => {
        $(`.section${id}1`).mouseover(() => {
            gsap.to(`.section${id}`, {height: 'auto', duration: .3})
            // $(`.section${id}`).css('height', 'auto')
        })
        $(`.section${id}1`).mouseleave(() => {
            gsap.to(`.section${id}`, {height: 0, duration: .3})
            // $(`.section${id}`).css('height', '0px')
        })
    })
    return (
        <div className={[classes.basket_product_select, `section${id}1`].join(' ')}>
            <p>{title}: {lists[idValue - 1]}</p>
            <section className={`section${id}`}>
                {lists && lists.map((list, index) =>
                    <option
                        onClick={() => selectCount(title == 'Размер' ? 'size' : 'count', index + 1)}
                        key={list}
                    >{list}</option>
                )}
            </section>
        </div>
    );
};

export default BasketProductsSelect;