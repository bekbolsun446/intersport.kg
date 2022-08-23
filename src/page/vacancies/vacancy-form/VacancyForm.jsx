import React, {useRef, useState} from 'react';
import classes from "./VacancyFrom.module.scss";
import InputUI from "../../../component/UI/input-ui/InputUI";
import MyButton from "../../../component/UI/my_button/MyButton";
import {BsFillFileEarmarkFill} from 'react-icons/bs'
import $ from 'jquery'

const VacancyForm = (props) => {
    const [vacancyForm, setVacancyForm] = useState({
        name: '',
        tel: '',
        email: '',
        about: '',
        resume: ''
    })

    const toggleVacancyFrom = (e) => {
        let value = e.target.value
        let name = e.target.name

        setVacancyForm({
            ...vacancyForm,
            [name]: value
        })
    }

    const submitVacancyForm = (e) => {
        e.preventDefault();
        if (vacancyForm.name , vacancyForm.tel, vacancyForm.email, vacancyForm.about, vacancyForm.resume) {
            console.log(vacancyForm);
            setVacancyForm({
                name: '',
                tel: '',
                email: '',
                about: '',
                resume: ''
            })
        }
    }
    
    $('.vacancyFormTel').focus(() => {
        setVacancyForm({
            ...vacancyForm,
            tel: '+996'
        })
    })

    return (
        <div className={classes.vacancy_form}>
            <h3 className={classes.vacancy_formTitle}>ОCТАВЬТЕ ЗАЯВКУ И ПРИСОЕДИНЯЙТЕСЬ В КРУТУЮ КОМАНДУ!</h3>
            <div className={classes.vacancy_form_content}>
                <p className={classes.vacancy_form_contentTitle}>Укажите контакные данные</p>
                <form onSubmit={submitVacancyForm} className={classes.vacancy_form_area}>
                    <InputUI
                        value={vacancyForm.name}
                        name='name'
                        onChange={toggleVacancyFrom}
                        type='text'
                        className={classes.vacancy_Input100}
                        placeholder={'Ваше имя и фамилия *'}
                    />
                    <InputUI
                        value={vacancyForm.tel}
                        name='tel'
                        onChange={toggleVacancyFrom}
                        type='tel'
                        className={[classes.vacancy_Input50, 'vacancyFormTel'].join(' ')}
                        placeholder={'Ваш телефон *'}

                    />
                    <InputUI
                        value={vacancyForm.email}
                        name='email'
                        onChange={toggleVacancyFrom}
                        type='email'
                        className={classes.vacancy_Input50}
                        placeholder={'Ваш Email *'}

                    />
                    <InputUI
                        value={vacancyForm.about}
                        name='about'
                        onChange={toggleVacancyFrom}
                        type='textarea'
                        className={classes.vacancy_InputTextArea}
                        placeholder={'Расскажите о себе *'}
                        required={false}
                    />
                    <label className={classes.vacancy_InputFileLabel} htmlFor="vacancy_InputFile">
                        ЗАГРУЗИТЬ РЕЗЮМЕ
                        <BsFillFileEarmarkFill className={classes.vacancy_fromIcon}/>
                        <InputUI
                            value={vacancyForm.resume}
                            name='resume'
                            onChange={toggleVacancyFrom}
                            id={'vacancy_InputFile'}
                            type='file'
                            className={classes.vacancy_InputFile}
                        />
                    </label>
                    <MyButton onClick={submitVacancyForm}>ОТПРАВИТЬ</MyButton>
                </form>
            </div>
        </div>
    );
};

export default VacancyForm;