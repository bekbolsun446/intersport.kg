import React, {useContext, useState} from 'react';
import classes from "./SignUp.module.scss";
import InputUI from "../../UI/input-ui/InputUI";
import MyButton from "../../UI/my_button/MyButton";
import {MyContext} from "../../../provider/Provider";
import login from "../login/Login";

const SignUp = (props) => {
        const {toggleShowLogin, toggleShowSignUp} = props;
        const context = useContext(MyContext)
        const {interUser, setInterUser} = context.register.user
        const {interUsers, setInterUsers} = context.register.users
        const [signUp, setSignUp] = useState({
            name: '',
            tel: '',
            userName: '',
            email: '',
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

        const submitSignUp = (e) => {
            e.preventDefault();
            let newUser = {...signUp, isLogin: true};
            setInterUser(newUser)
            setSignUp({
                name: '',
                tel: '',
                userName: '',
                email: '',
                password: ''
            })
            setTimeout(toggleShowSignUp, 1000)
        }

        return (
            <form onSubmit={submitSignUp} className={classes.signUp}>
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
                    placeholder={'Email*'}
                    type={'email'}
                    value={signUp.email}
                    name={'email'}
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
                <MyButton
                    className={classes.signUpBtn}
                    onClick={submitSignUp}
                >
                    ЗАРЕГИСТРИРОВАТЬся
                </MyButton>
                <MyButton
                    className={classes.logInBtn}
                    onClick={toggleShowLogin}
                >
                    ВОЙТИ
                </MyButton>
            </form>
        );
    }
;

export default SignUp;