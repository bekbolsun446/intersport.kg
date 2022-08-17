import React, {useState, createContext, useEffect} from 'react';
import App from "../App";

export const MyContext = createContext();

const Provider = () => {
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(false)
    //VACANCIES
    const vacancies = [
        {
            id: 1,
            name: 'Продавец – консультант',
            location: 'БИШКЕК, КЫРГЫЗСТАН',
            img: 'https://intersport.kg/media/4-%D0%B0%D0%B3%D0%B5%D0%BD%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D0%B0.png',
            description: 'Bekbolsun Samaganov',
            link: '#',
            numbers: ['0702076003', '0779076003'],
            requirements: [
                {
                    id: 1,
                    name: 'Задачи',
                    lists: [
                        'В нашу команду требуются продавцы-консультанты',
                        ' Девушки и парни от 20 до 30 лет',
                        ' Увлечённость модой, коммуникабельность, доброжелательность, активность',
                        ' Опыт работы в розничной торговле (желательно)'
                    ]
                },
                {
                    id: 2,
                    name: 'Требования',
                    lists: [
                        'Консультирование покупателей по представленному товару в магазине',
                        ' Способность заинтересовать покупателя в покупке',
                        '  Поддержание порядка в торговом зале'
                    ]
                },
                {
                    id: 3,
                    name: 'Условия работы',
                    lists: [
                        'График работы посменный 6/1: 9:30-18:00, 13:30-22:00',
                        'Трудоустройство по ТК КР',
                        'Поддержание порядка в торговом зале'
                    ]
                }
            ]
        },
        {
            id: 2,
            name: 'Менеджер магазина',
            location: 'БИШКЕК, КЫРГЫЗСТАН',
            img: 'https://intersport.kg/media/5-%D0%BC%D0%B5%D0%BD%D0%B5%D0%B4%D0%B6%D0%B5%D1%80.png',
            description: 'Bekbolsun Samaganov',
            link: '#'
        },
        {
            id: 3,
            name: 'Менеджер по маркетингу',
            location: 'БИШКЕК, КЫРГЫЗСТАН',
            img: 'https://intersport.kg/media/%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3.png',
            description: 'Bekbolsun Samaganov',
            link: '#'
        }
    ]
    //VACANCIES ENE
    useEffect(() => {
        fetch('products.json')
            .then((res) => res.json())
            .then((products) => {
                    setIsLoaded(true)
                    setProducts(products)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error)
                })
    }, []);

    const contextValue = {
        products,
        error: {error, setError},
        isLoaded: {isLoaded, setIsLoaded},
        vacancies: vacancies
    }

    return (
        <MyContext.Provider value={contextValue}>
            <App/>
        </MyContext.Provider>
    );
};

export default Provider;
