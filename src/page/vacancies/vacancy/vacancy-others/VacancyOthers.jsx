import React, {useContext} from 'react';
import classes from "./VacancyOthers.module.scss";
import {MyContext} from "../../../../provider/Provider";
import VacancyItem from "../../vacancies-sections/vacancy-item/VacancyItem";

const VacancyOthers = (props) => {
    const {id} = props;
    const context = useContext(MyContext)
    const vacancies = context.vacancies.filter(vacancy => vacancy.id != id)

    return (
        <div className={classes.other_vacancy}>
            <h4 className={classes.other_vacancyTitle}>ДРУГИЕ ВАКАНСИИ</h4>
            <div className={classes.other_vacancy_content}>
                {vacancies.map(vacancy =>
                    <div key={vacancy.id} className={classes.other_vacancyItem}>
                        <VacancyItem vacancy={vacancy}/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VacancyOthers;