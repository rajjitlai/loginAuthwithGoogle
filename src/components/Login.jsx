// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../configs/auth';

// eslint-disable-next-line react/prop-types
const Login = ({ setIsAuth }) => {
    const Navigate = useNavigate();

    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setIsAuth(true);
                localStorage.setItem("isAuth", true);
                localStorage.setItem("userName", JSON.stringify(result.user.displayName));
                localStorage.setItem("photoURL", JSON.stringify(result.user.photoURL));
                Navigate("/");
            })
            .catch((error) => {
                console.error("Error signing in: ", error);
            });
    };

    const userName = "User";

    return (
        <div className="LoginComponent">
            <div className='loginCard'>
                <img src="/public/assets/login.png" alt="Illustration" />
                <h2 className='font-semibold'>Welcome {userName}</h2>
                <p>Login</p>
                <div className='google-btn' onClick={signIn}>
                    <div className="google-icon-wrapper">
                        <img src="/public/assets/google.png" alt="Google Icon" />
                    </div>
                    <p className='btn-text'><b>Sign in with Google</b></p>
                </div>
            </div>
        </div>
    );
};

export default Login;