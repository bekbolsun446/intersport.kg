import React, {useContext,useEffect} from 'react';
import classes from "./Basket.module.scss";
import PageHead from "../../component/page-head/PageHead";
import MyButton from "../../component/UI/my_button/MyButton";
import BasketProducts from "./basket-products/BasketProducts";
import BasketAside from "./basket-aside/BasketAside";
import {MyContext} from "../../provider/Provider";

const Basket = (props) => {
    const {} = props;

    // GET CONTEXT FROM PROVIDER
    const context = useContext(MyContext)
    const {basket, setBasket} = context.basket
    // GET CONTEXT FROM PROVIDER END

    //BASKET ASIDE DATA
    let allSum = 0;                       // give a variable of sum
    let allProductsCount = 0;             // give a variable of count
    let allSale = 0;                           // give a variable of sale
    for (let i = 0; i < basket.length; i++) {  // into basket by cycle
        let product = basket[i]                    // get a product
        allSum += (product.newPrice * product.choose.count)               // add to sum product's price*count
        allProductsCount += product.choose.count                  // add to count product's count
        if (product.sale) {
            allSale += ((product.oldPrice - product.newPrice) * product.choose.count)   //add to saleSum products sale * count
        }
    }
    //BASKET ASIDE DATA  END

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    return (
        <div className={classes.basket}>
            <PageHead currentPage={'Мой заказ'}/>
            <h2 className={classes.basketTitle}>
                Мой заказ |
                <span className={classes.basketTitleSum}>Итого: {allSum}</span>
            </h2>
            <div className={classes.basket_content}>
                <BasketProducts basket={basket}/>
                <BasketAside allSum={allSum} allProductsCount={allProductsCount} allSale={allSale}/>
            </div>
        </div>
    );
};

export default Basket;