import React from 'react';
import classes from "./VacancyRequirement.module.scss";

const VacancyRequirement = (props) => {
    const {requirement} = props;
    return (
        <div className={classes.vacancy_requirement}>
            <h5 className={classes.vacancy_requirementTitle}>{requirement.name}</h5>
            <ul>
                {requirement.lists.map((list, index) =>
                    <li key={index}>{list} {index == requirement.lists.length - 1 ? '.' : ';'}</li>
                )}
            </ul>
        </div>
    );
};

export default VacancyRequirement;