import React, {useContext} from 'react';
import classes from "./Vacancy.module.scss";
import {MyContext} from "../../provider/Provider";
import VacancyOthers from "./vacancy-others/VacancyOthers";

const Vacancy = () => {
    const context = useContext(MyContext)
    const vacancies = context.vacancies;
    const vacancy = vacancies.filter(vacancy => vacancy.id == 1)[0]
    console.log(vacancy)
    return (
        <div className={classes.vacancy}>
            <div className={classes.vacancy_content}>
                <div className={classes.vacancy_content_hero}>
                    <div className={classes.vacancy_img}>
                        <img src="https://intersport.kg/media/5-%D0%BC%D0%B5%D0%BD%D0%B5%D0%B4%D0%B6%D0%B5%D1%80.png"
                             alt=""/>
                    </div>
                    <div className={classes.vacancy_about}>
                        <p className={classes.vacancyLocation}>БИШКЕК, КЫРГЫЗСТАН</p>
                        <h3 className={classes.vacancyName}>Менеджер магазина</h3>
                    </div>
                </div>
                <div className={classes.vacancy_requirement}>
                    <h5 className={classes.vacancy_requirementTitle}>Задачи</h5>
                    <ul>
                        <li> Кандидат в возрасте от 25 до 38 лет;</li>
                        <li> - Опыт руководящей работы в сфере розничных продаж от 1 года;</li>
                        <li> - Высшее образование;</li>
                        <li>- Владение английским языком;</li>
                        <li> - Отличный русский язык;</li>
                        <li>- Высокий уровень владения ПК (MS Office, особенно Excel, PowerPoint);</li>
                        <li> - Активность, умение общаться с людьми, ответственность, самоорганизация, способность к
                            самостоятельным решениям.
                        </li>
                    </ul>
                </div>
            </div>
            <VacancyOthers/>
        </div>
    );
};

export default Vacancy;