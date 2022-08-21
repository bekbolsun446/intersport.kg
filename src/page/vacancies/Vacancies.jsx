import React from 'react';
import MyButton from "../../component/UI/my_button/MyButton";
import classes from "./Vacancies.module.scss";
import {Link} from "react-router-dom";
import VacanciesHero from "./vacancies-sections/vacancies-hero/VacanciesHero";
import VacanciesAside from "./vacancies-sections/vacancies-aside/VacanciesAside";
import PageHead from "../../component/page-head/PageHead";

const Vacancies = () => {

    return (
        <div>
            <PageHead currentPage={'Вакансии'}/>
            <p className={classes.vacancies_head_}>Карьера | Вакансии</p>
            <h1 className={classes.vacanciesTitle}>НАЧНИ КАРЬЕРУ В INTER SPORT!</h1>
            <div className={classes.vacancies}>
                <VacanciesHero/>
                <VacanciesAside/>
            </div>

        </div>
    );
};

export default Vacancies;