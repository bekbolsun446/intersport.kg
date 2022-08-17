import React, {useContext} from 'react';
import classes from "./Vacancy.module.scss";
import {MyContext} from "../../provider/Provider";
import VacancyOthers from "./vacancy-others/VacancyOthers";
import VacancyHero from "./vacancy-hero/VacancyHero";

const Vacancy = () => {
    const context = useContext(MyContext)
    const vacancies = context.vacancies;
    const vacancy = vacancies.filter(vacancy => vacancy.id == 1)[0]

    return (
        <div className={classes.vacancy}>
            <VacancyHero vacancy={vacancy}/>
            <VacancyOthers id={vacancy.id}/>
        </div>
    );
};

export default Vacancy;