import React, {useContext, useState} from 'react';
import classes from "./Register.module.scss";
import Modal from "../modal/Modal";
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";
import {MyContext} from "../../provider/Provider";


const Register = () => {
    const context = useContext(MyContext);
    const register = context.register
    const showLogin = register.login.showLogin;
    const showSignUp = register.signUp.showSignUp;
    const toggleShowLogin = register.toggleShowLogin
    const toggleShowSignUp = register.toggleShowSignUp
    return (
        <div className={classes.register}>
            {showLogin &&
                <Modal toggleShow={toggleShowLogin}>
                    <Login toggleShowSignUp={toggleShowSignUp}/>
                </Modal>
            }
            {showSignUp &&
                <Modal toggleShow={toggleShowSignUp}>
                    <SignUp toggleShowLogin={toggleShowLogin} toggleShowSignUp={toggleShowSignUp} />
                </Modal>
            }
        </div>
    );
};

export default Register;