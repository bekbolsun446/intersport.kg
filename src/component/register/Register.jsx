import React, {useState} from 'react';
import classes from "./Register.module.scss";
import Modal from "../modal/Modal";
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";


const Register = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)
    return (
        <div className={classes.register}>
            {showLogin &&
                <Modal>
                    <Login/>
                </Modal>
            }
            {showSignUp &&
                <Modal>
                    <SignUp/>
                </Modal>
            }
        </div>
    );
};

export default Register;