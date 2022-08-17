import React from 'react';
import MainHead from "../main_head/MainHead";
import CardSlide from "../card-slide/CardSlide";

const MainNew = (props) => {
    const {newProducts,link,linkTitle,title}=props

    return (
        newProducts.length > 0 &&
        <div>
            <MainHead title={title} link={link} linkTitle={linkTitle}/>
            <CardSlide products={newProducts}/>
        </div>

    );
};

export default MainNew;