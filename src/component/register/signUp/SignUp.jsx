import React, {useState} from 'react';
import classes from "./SignUp.module.scss";
import InputUI from "../../UI/input-ui/InputUI";
import MyButton from "../../UI/my_button/MyButton";

const SignUp = () => {
    const [signUp, setSignUp] = useState({
        name: '',
        tel: '',
        userName: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false)

    const toggleLogin = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setSignUp({
            ...signUp,
            [name]: value
        })
    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className={classes.signUp}>
            <h1 className={classes.signUpTitle}>Вход</h1>
            <InputUI
                placeholder={'Ваше имя и фамилия *'}
                type={'text'}
                value={signUp.name}
                name={'name'}
                onChange={toggleLogin}
            />
            <InputUI
                placeholder={'Телефон (+996...) **'}
                type={'tel'}
                value={signUp.tel}
                name={'tel'}
                onChange={toggleLogin}
            />
            <InputUI
                placeholder={'Username*'}
                type={'text'}
                value={signUp.userName}
                name={'userName'}
                onChange={toggleLogin}
            />
            <InputUI
                placeholder={'Password*'}
                type={'password'}
                value={signUp.password}
                name={'password'}
                onChange={toggleLogin}
            />
            <label
                className={classes.showPassword}
                onClick={toggleShowPassword}
            >
                <input type="checkbox" id='showPassword'/>
                Show password
            </label>
            <MyButton className={classes.signUpBtn}>
                ВОЙТИ
            </MyButton>
            <MyButton className={classes.logInBtn}>
                ЗАРЕГИСТРИРОВАТЬся
            </MyButton>
        </div>
    );
};

export default SignUp;