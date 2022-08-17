import React, {useContext} from 'react';
import classes from "./VacanciesHero.module.scss";
import {Link} from "react-router-dom";
import VacancyItem from "../vacancy-item/VacancyItem";
import {MyContext} from "../../../provider/Provider";

const VacanciesHero = (props) => {
    const {} = props
    const context = useContext(MyContext)
    const vacancies = context.vacancies
    return (
        <div className={classes.vacancies_content}>
            <div className={classes.vacancies_content_img}>
                <img src="https://intersport.kg/static/img/png/vacancies-main.png" alt=""/>
            </div>
            <div className={classes.vacancies_types}>
                {vacancies.map(vacancy =>
                    <div key={vacancy.id} className={classes.vacancy_item_content}>
                        <VacancyItem vacancy={vacancy}/>
                    </div>
                )
                }
            </div>
        </div>
    );
};

export default VacanciesHero;