import React,{useEffect} from 'react';
import classes from "./Vacancies.module.scss";
import VacanciesHero from "./vacancies-sections/vacancies-hero/VacanciesHero";
import VacanciesAside from "./vacancies-sections/vacancies-aside/VacanciesAside";
import PageHead from "../../component/page-head/PageHead";

const Vacancies = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
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