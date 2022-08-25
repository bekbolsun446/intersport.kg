import React, {useEffect} from 'react';
import classes from "./Brands.module.scss";
import PageHead from "../../component/page-head/PageHead";
import BrandItem from "./brand-item/BrandItem";

const Brands = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);


    const brands = ['Adidas', 'Emporio Armani', 'Hugo Boss', 'Nike', 'Puma', 'Reebok', 'Under Armour']
    return (
        <div className={classes.brands}>
            <PageHead currentPage={'Бренды'}/>
            <h1 className={classes.brandsTitle}>Бренды</h1>
            {brands.map((brand, index) =>
                <BrandItem key={index} brand={brand}/>
            )}
        </div>
    );
};

export default Brands;