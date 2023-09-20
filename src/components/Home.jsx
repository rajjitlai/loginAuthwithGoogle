// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../configs/auth';
import { signOut } from 'firebase/auth';
import "../style/style.css";

const Home = () => {
    const userName = JSON.parse(localStorage.getItem("userName"));
    const photoURL = JSON.parse(localStorage.getItem("photoURL"));
    const Navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.clear();
        signOut(auth).then(() => {
            Navigate("/Login");
            window.location.reload();
        })
    }

    return (
        <div className="app">
            <h1 className="font-semibold text-5xl">
                Welcome @{userName}
            </h1>
            <img src={photoURL} alt="" />
            <button className='logout' onClick={handleSignOut}>Logout</button>
        </div>
    )
}

export default Home;