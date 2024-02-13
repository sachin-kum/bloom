import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

const SETPass = () => {
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
                    <h3>Set your password</h3>
                    <p>Enter a password below to continue.</p>
                    <div className="login-form">
                        <form action="/forgot-password-success">
                            <label htmlFor="password">Your Password</label>
                            <input type="password" id="password" placeholder="******" required/>
                            <label htmlFor="repassword">Re-enter your Password</label>
                            <input type="password" id="repassword" placeholder="******" required/>
                            <input type="submit" className="button1" value="Set Password" />
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
     );
}
 
export default SETPass;