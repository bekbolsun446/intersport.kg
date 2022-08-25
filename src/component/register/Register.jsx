import React, {useContext, useState} from 'react';
import classes from "./Register.module.scss";
import Modal from "../modal/Modal";
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";
import {MyContext} from "../../provider/Provider";
import MyButton from "../UI/my_button/MyButton";


const Register = () => {
    const context = useContext(MyContext);
    const register = context.register
    const showLogin = register.login.showLogin;
    const showSignUp = register.signUp.showSignUp;
    const toggleShowLogin = register.toggleShowLogin
    const toggleShowSignUp = register.toggleShowSignUp
    const {signForSave, setSignForSave} = register.signForSave
    const toggleSignForSave = register.toggleSignForSave

    const signUpForSave = (e) => {
        e.preventDefault();
        toggleShowSignUp()
        toggleSignForSave()
    }

    return (
        <div className={classes.register}>
            {showLogin &&
                <Modal toggleShow={toggleShowLogin}>
                    <Login toggleShowSignUp={toggleShowSignUp} toggleShowLogin={toggleShowLogin}/>
                </Modal>
            }
            {showSignUp &&
                <Modal toggleShow={toggleShowSignUp}>
                    <SignUp toggleShowLogin={toggleShowLogin} toggleShowSignUp={toggleShowSignUp}/>
                </Modal>
            }
            {signForSave &&
                <Modal toggleShow={toggleSignForSave}>
                    <div className={classes.signForSave}>
                        <p className={classes.signForSaveTitle}>В избранное могут добавлять товары только
                            зарегистрированные
                            пользователи. Пожалуйста войдите в профиль или зарегистрируйтесь!</p>
                        <MyButton
                            onClick={signUpForSave}
                            className={classes.signForSaveBtn}
                        >
                            ЗАРЕГИСТРИРОВАТЬСЯ
                        </MyButton>
                    </div>
                </Modal>
            }
        </div>
    );
};

export default Register;