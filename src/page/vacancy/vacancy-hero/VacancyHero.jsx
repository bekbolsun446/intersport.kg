import React from 'react';
import classes from "./VacancyHero.module.scss";
import VacancyRequirement from "./vacancy-requirement/VacancyRequirement";

const VacancyHero = (props) => {
    const {vacancy} = props;
    return (
        <div className={classes.vacancy_content}>
            <div className={classes.vacancy_content_hero}>
                <div className={classes.vacancy_img}>
                    <img src={vacancy.img}
                         alt=""/>
                </div>
                <div className={classes.vacancy_about}>
                    <p className={classes.vacancyLocation}>{vacancy.location}</p>
                    <h3 className={classes.vacancyName}>{vacancy.name}</h3>
                </div>
            </div>
            {vacancy.requirements.map(requirement =>
                <VacancyRequirement key={requirement.id} requirement={requirement}/>
            )}
            <p className={classes.vacancyNumbers}>
                Контакты:
                {vacancy.numbers.map((number, index) =>
                    <span key={index}>{'  ' + number} {index != vacancy.numbers.length - 1 ? '  or  ' : ''}</span>
                )}
            </p>
        </div>
    );
};

export default VacancyHero;