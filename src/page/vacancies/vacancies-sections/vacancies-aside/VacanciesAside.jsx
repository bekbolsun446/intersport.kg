import React, {useEffect, useState} from 'react';
import classes from "./VacanciesAside.module.scss";
import MyButton from "../../../../component/UI/my_button/MyButton";
import Modal from "../../../../component/modal/Modal";
import VacancyForm from "../../vacancy-form/VacancyForm";
import $ from 'jquery'

const VacanciesAside = (props) => {
    const {} = props;
    const [showVacanciesModal, setShowVacanciesModal] = useState(false)

    const toggleVacanciesModal = (e) => {
        e.preventDefault();
        setShowVacanciesModal(!showVacanciesModal)
    }
    useEffect(() => {
        if (showVacanciesModal) {
            $('body').css('overflow', 'hidden')
        } else {
            $('body').css('overflow', 'auto')
        }
    })
    return (
        <div className={classes.vacancies_about}>
            <p className={classes.vacancies_about_p}>
                INTER SPORT- это то, что вы искали. Подайте заявку на одну из множества доступных вакансий и
                присоединяйтесь в крутой cпортивный магазин INTER SPORT!
            </p>
            <h4 className={classes.vacancies_aboutTitle}>Свяжитесь с нами</h4>
            <MyButton onClick={toggleVacanciesModal}>Оставить заявку</MyButton>
            {showVacanciesModal &&
                <Modal toggleShow={toggleVacanciesModal}>
                    <div className={classes.vacancies_from}>
                        <VacancyForm/>
                    </div>
                </Modal>
            }
        </div>
    );
};

export default VacanciesAside;