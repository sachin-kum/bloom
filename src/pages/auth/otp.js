import React from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";

const OTP = () => {
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
                    <h3>Verify Your Email Address</h3>
                    <p>Enter the 6-digit OTP received on <br />ks***********60@gmail.com</p>
                    <div className="login-form">
                        <form action="/forgot-password-set">
                            <label htmlFor="otp">Enter OTP</label>
                            <input type="text" id="otp" placeholder="0539" required/>
                            <input type="submit" className="button1" value="Verify Code" />
                            <label>Resend OTP (0:07s)</label>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
     );
}
 
export default OTP;