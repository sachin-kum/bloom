import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

const Forgot = () => {
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
                    <h3>Forgot your password?</h3>
                    <p>Please enter you email address and we will send you instructions to reset your password.</p>
                    <div className="login-form">
                        <form action="/forgot-password-otp">
                            <label htmlFor="email">Email ID</label>
                            <input type="email" id="email" placeholder="test@acagarwal.com" required />
                            <input type="submit" className="button1" value="Continue" />
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Forgot;