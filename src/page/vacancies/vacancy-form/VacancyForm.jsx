import React from 'react';
import classes from "./VacancyFrom.module.scss";
import InputUI from "./input-ui/InputUI";
import MyButton from "../../../component/UI/my_button/MyButton";
import {BsFillFileEarmarkFill} from 'react-icons/bs'

const VacancyForm = (props) => {
    return (
        <div className={classes.vacancy_form}>
            <h3 className={classes.vacancy_formTitle}>ОCТАВЬТЕ ЗАЯВКУ И ПРИСОЕДИНЯЙТЕСЬ В КРУТУЮ КОМАНДУ!</h3>
            <div className={classes.vacancy_form_content}>
                <p className={classes.vacancy_form_contentTitle}>Укажите контакные данные</p>
                <form action="" className={classes.vacancy_form_area}>
                    <InputUI
                        type='text'
                        className={classes.vacancy_Input100}
                        placeholder={'Ваше имя и фамилия *'}
                    />
                    <InputUI
                        type='tel'
                        className={classes.vacancy_Input50}
                        placeholder={'Ваш телефон *'}

                    />
                    <InputUI
                        type='email'
                        className={classes.vacancy_Input50}
                        placeholder={'Ваш Email *'}

                    />
                    <InputUI
                        type='textarea'
                        className={classes.vacancy_InputTextArea}
                        placeholder={'Расскажите о себе *'}
                        required={false}
                    />
                    <label className={classes.vacancy_InputFileLabel} htmlFor="vacancy_InputFile">
                        ЗАГРУЗИТЬ РЕЗЮМЕ
                        <BsFillFileEarmarkFill className={classes.vacancy_fromIcon}/>
                        <InputUI
                            id={'vacancy_InputFile'}
                            type='file'
                            className={classes.vacancy_InputFile}
                        />
                    </label>
                    <MyButton>ОТПРАВИТЬ</MyButton>
                </form>
            </div>
        </div>
    );
};

export default VacancyForm;