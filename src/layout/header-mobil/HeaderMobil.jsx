import React, {useContext} from 'react';
import classes from "./HeaderMobil.module.scss";
import HeaderMobilHead from "./header-modil-head/HeaderMobilHead";
import HeaderMobilCatalog from "./header-mobil-catalog/HeaderMobilCatalog";
import HeaderMobilItem from "../../component/header-mobil-item/HeaderMobilItem";
import {AiOutlineStar} from 'react-icons/ai'
import {MyContext} from "../../provider/Provider";


const HeaderMobil = (props) => {
    const {} = props;
    const context = useContext(MyContext);
    const headerWarn = context.headerWarn;
    const toggleMobileHeader = context.mobileHeader.toggleMobileHeader

    return (
        <div className={[classes.header_mobil, 'header_mobile'].join(' ')}>
            <div className="container">
                <HeaderMobilHead toggleMobileHeader={toggleMobileHeader}/>
                <HeaderMobilItem
                    onClick={toggleMobileHeader}
                    link={'/catalog/new'}
                    className={classes.header_mobilNew}
                >
                    <AiOutlineStar/>
                    ЗВЕЗДЫ
                </HeaderMobilItem>
                <HeaderMobilCatalog/>
                <HeaderMobilItem onClick={toggleMobileHeader} link={'/brands'}>бренды</HeaderMobilItem>
                <HeaderMobilItem onClick={toggleMobileHeader} link={'/catalog/new'}>новинки</HeaderMobilItem>
                <HeaderMobilItem onClick={toggleMobileHeader} className={classes.redColor}
                                 link={'/catalog/sale'}>скидки%</HeaderMobilItem>
                {headerWarn && headerWarn.map(headerWarnItem =>
                    <HeaderMobilItem
                        key={headerWarnItem.id}
                        link={headerWarnItem.link}
                        onClick={toggleMobileHeader}
                    >
                        {headerWarnItem.name}
                    </HeaderMobilItem>
                )}
                <HeaderMobilItem link={''}>Профиль</HeaderMobilItem>
            </div>
        </div>
    );
};

export default HeaderMobil;