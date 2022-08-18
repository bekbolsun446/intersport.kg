import React from 'react';
import classes from "./VacanciesAside.module.scss";
import MyButton from "../../../../component/UI/my_button/MyButton";

const VacanciesAside = () => {
    return (
        <div className={classes.vacancies_about}>
            <p className={classes.vacancies_about_p}>
                INTER SPORT- это то, что вы искали. Подайте заявку на одну из множества доступных вакансий и
                присоединяйтесь в крутой cпортивный магазин INTER SPORT!
            </p>
            <h4 className={classes.vacancies_aboutTitle}>Свяжитесь с нами</h4>
            <MyButton>Оставить заявку</MyButton>
        </div>
    );
};

export default VacanciesAside;