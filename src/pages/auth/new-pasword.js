import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Success from '../../assets/fp-success.svg';
import { NavLink } from "react-router-dom";

const PasswordSuccess = () => {
    return (

        <div className="profile-parent">
            <style>
                {
                    `.navcol, .avatarcol{
                    display: none;
                }`
                }
            </style>
            <Header />

            <div className="auth-widget">
                <div className="auth-widget-box">
                    <img src={Success} alt={Success} className="img-fluid" />
                    <h3>Password Set</h3>
                    <p>Your password has been set successfully.</p>
                    <NavLink to="/login" className="button1">Login</NavLink>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default PasswordSuccess;