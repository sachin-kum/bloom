import axios from "axios";
import React from "react";
import { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useCookies } from 'react-cookie'
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
    const Navigate = useNavigate()
    const [, setCookie] = useCookies(["token"]);
    const [userData, setUserData] = useState({
        user: '',
        pwd: ''
    })
    const handalChange = (event) => {
        const { name, value } = event.target
        setUserData({
            ...userData,
            [name]: value
        })
    }
    const handalSubmit = async (event) => {
        event.preventDefault()
        const { user, pwd } = userData
        if (user && pwd) {
            await axios.post(`https://upi.acagarwal.com/tradewebapi/api/Main/Login_validate_Password?userId=${user}&password=${pwd}`).then((result) => {
                const date = new Date(result.data.tokenExpireTime)
                setCookie('token', result.data.token, { expires: date })
                result.data.status && Navigate('/')
            })
        } else {

        }
    }
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
                    <h3>Welcome</h3>
                    <p>Login to AC Agarwal</p>
                    <div className="login-form">
                        <form onSubmit={handalSubmit}>
                            <label htmlFor="clientid">Client ID</label>
                            <input type="text" id="clientid"
                                placeholder="ms1613"
                                name="user"
                                onChange={handalChange}
                                required />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password"
                                placeholder="******"
                                name="pwd"
                                onChange={handalChange}
                                required />
                            <div className="remember-forgot row">
                                <div className="col-6 left">
                                    <input type="checkbox" id="check" name="remember" value="Remember Me" />
                                    <label htmlFor="check">Remember Me</label>
                                </div>
                                <div className="col-6 right">
                                    <label><NavLink to="/forgot-password">Forgot Password?</NavLink></label>
                                </div>
                            </div>
                            <input type="submit" className="button1" value="Login" />
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Login;