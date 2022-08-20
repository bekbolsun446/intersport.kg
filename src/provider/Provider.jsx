import React, {useState, createContext, useEffect} from 'react';
import App from "../App";
import * as data from '../data/data'

export const MyContext = createContext();

const Provider = () => {
    const [isLoaded, setIsLoaded] = useState(true)
    const [error, setError] = useState(false)
    const vacancies = data.data.vacancies
    const products = data.data.products;
    const categories = data.data.categories;
    const [basket, setBasket] = useState([{
        id: 6,
        img: "https://inter-sport.s3.amazonaws.com/products/193744/persian%20red_16/193744-1_resized_800X800.png",
        imgs: [
            "https://inter-sport.s3.amazonaws.com/products/193744/persian%20red_16/193744-1_resized_800X800.png",
            'https://inter-sport.s3.amazonaws.com/products/193744/persian%20red_16/193744-2_resized_800X800.png',
            'https://inter-sport.s3.amazonaws.com/products/193744/persian%20red_16/193744-3_resized_800X800.png',
            'https://inter-sport.s3.amazonaws.com/products/193744/persian%20red_16/193744-4_resized_800X800.png',
            'https://inter-sport.s3.amazonaws.com/products/193744/persian%20red_16/193744-5_resized_800X800.png',
            'https://inter-sport.s3.amazonaws.com/products/193744/persian%20red_16/193744-6_resized_800X800.png'
        ],
        brand: "Кроссовки   Puma",
        name: "Кроссовки Puma Disperse XT Wn's",
        newPrice: 4790,
        oldPrice: 7990,
        sale: 40,
        colors: [
            {
                id: 1,
                colorName: "Красный",
                color: "red"
            },
            {
                id: 2,
                colorName: "Black",
                color: "black"
            }
        ],
        sizes: [36, 38, 38.5, 39
        ],
        link: "catalog",
        count: 2,
        article: "193744-16",
        shop: [
            {
                id: 1,
                name: "InterSport Ч. Айтматова: 1",
                shopCount: 1
            },
            {
                id: 2,
                name: 'ТЦ "1000 мелочей"',
                shopCount: 1
            }
        ],
        isNew: false,
        isStar: true,
        isPopular: true,
        description: 'Благодаря яркому дизайну и маневренности функциональные кроссовки Disperse XT Women\'s Training Shoes для начинающих спортсменов разбавят ежедневную рутину. Промежуточная подошва из ЭВА дополнена гибкими канавками в передней части: они отвечают за поддержку быстрых движений. Шаг становится мягким, но отзывчивым. То, что нужно для тех, кто много тренируется. Детали Стиль: Спортивный Вид спорта: Тренинг Характеристики Материал верха: 65% текстиль, 35% полиуретан Материал подошвы: 90% ЭВА, 10% резина (зонирование – для сцепления); промежуточная подошва из ЭВА; CMEVA – для легкости Женские кроссовки Заниженный силуэт Усиленная средняя часть – для поддержки стопы Мягкий текстильный язычок Гибкие канавки в передней части промежуточной подошвы отвечают за поддержку быстрых движений во время тренировки На шнуровке Фирменные полоски PUMA Formstrip сбоку Логотип PUMA No. 1 на язычке Логотип PUMA Cat на подошве',
        category: 'МУЖЧИНАМ',
        subCategory: 'Обувь',
        choose: {
            color: 1,
            count: 1,
            size: 1
        }
    }, {
        id: 8,
        img: "https://inter-sport.s3.amazonaws.com/products/195563/high%20risk%20red_03/195563-1_resized_800X800.png",
        imgs: [
            'https://inter-sport.s3.amazonaws.com/products/195563/high%20risk%20red_03/195563-1_resized_800X800.png',
            'https://inter-sport.s3.amazonaws.com/products/195563/high%20risk%20red_03/195563-2_resized_800X800.png',
            'https://inter-sport.s3.amazonaws.com/products/195563/high%20risk%20red_03/195563-3_resized_800X800.png',
            'https://inter-sport.s3.amazonaws.com/products/195563/high%20risk%20red_03/195563-4_resized_800X800.png',
            'https://inter-sport.s3.amazonaws.com/products/195563/high%20risk%20red_03/195563-5_resized_800X800.png',
            'https://inter-sport.s3.amazonaws.com/products/195563/high%20risk%20red_03/195563-6_resized_800X800.png',
            'https://inter-sport.s3.amazonaws.com/products/195563/peony_04/195563-1_resized_800X800.png',
            'https://inter-sport.s3.amazonaws.com/products/195563/peony_04/195563-2_resized_800X800.png',
            'https://inter-sport.s3.amazonaws.com/products/195563/peony_04/195563-3_resized_800X800.png',
            'https://inter-sport.s3.amazonaws.com/products/195563/peony_04/195563-4_resized_800X800.png',
            'https://inter-sport.s3.amazonaws.com/products/195563/peony_04/195563-5_resized_800X800.png',
            'https://inter-sport.s3.amazonaws.com/products/195563/peony_04/195563-6_resized_800X800.png'
        ],
        brand: "Кроссовки   Puma",
        name: "Кроссовки Puma Flyer Flex PS",
        newPrice: 3290,
        oldPrice: 5490,
        sale: 40,
        colors: [
            {
                id: 1,
                colorName: "Красный",
                color: "red"
            },
            {
                id: 2,
                colorName: "Голубой",
                color: "#00FFFF"
            },
            {
                id: 3,
                colorName: "White",
                color: "white"
            },
            {
                id: 4,
                colorName: "Green",
                color: "green"
            }

        ],
        sizes: [28, 28.5, 31.5, 32.5, 33, 34.5],
        link: "catalog",
        count: 6,
        article: "195563-03",
        shop: [
            {
                id: 1,
                name: "InterSport Ч. Айтматова: 1",
                shopCount: 1
            }
        ],
        isNew: true,
        isStar: false,
        isPopular: true,
        description: 'Ваш малыш может не оценить все удивительные технологии и элементы дизайна этих кроссовок Flyer Flex, но вы оцените. Основанные на успешной платформе Flyer Runner, они имеют смелый новый силуэт с гибкими канавками, проходящими по всей длине инструмента. Между тем, верхняя часть имеет культовую полоску PUMA Formstrip с принтом, а также накладки на пятку и проушины. Ваш малыш может быть самым стильным и состоятельным ребенком в округе. ОСОБЕННОСТИ И ПРЕИМУЩЕСТВА CMEVA: материал EVA, полученный компрессионным формованием PUMA, для легкости. ПОДРОБНОСТИ Низкий ботинок Инструмент отличается смелым новым силуэтом с гибкими канавками по всей длине Верхняя часть украшена логотипом PUMA Formstrip с печатным контуром межподошва из ЭВА Резиновое покрытие в области пятки и носка обеспечивает долговечность подошвы и сцепление Подошва Grippy EVA обеспечивает сцепление в любой ситуации Яркий логотип PUMA на пятке Логотип PUMA Cat на язычке PUMA Kids’ style: рекомендуется для маленьких детей от 4 до 8 лет.',
        category: 'ЖЕНЩИНАМ',
        subCategory: 'Обувь',
        choose: {
            color: 1,
            count: 1,
            size: 1
        }
    }])

    const contextValue = {
        categories: categories,
        products: products,
        error: {error, setError},
        isLoaded: {isLoaded, setIsLoaded},
        vacancies: vacancies,
        basket: {basket, setBasket}
    }

    return (
        <MyContext.Provider value={contextValue}>
            <App/>
        </MyContext.Provider>
    );
};

export default Provider;
