import React, {useContext} from 'react';
import classes from "./Vacancy.module.scss";
import {MyContext} from "../../../provider/Provider";
import VacancyOthers from "./vacancy-others/VacancyOthers";
import VacancyHero from "./vacancy-hero/VacancyHero";
import {useParams} from "react-router-dom";

const Vacancy = (props) => {
    let {name} = useParams()
    const context = useContext(MyContext)
    const vacancies = context.vacancies;
    const vacancy = vacancies.filter(vacancy => vacancy.name == name)[0]

    return (
        <div className={classes.vacancy}>
            <VacancyHero vacancy={vacancy}/>
            <VacancyOthers id={vacancy.id}/>
        </div>
    );
};

export default Vacancy;