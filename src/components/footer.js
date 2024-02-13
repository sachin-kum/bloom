import React from 'react'
import { NavLink } from 'react-router-dom';
import FLogo from '../assets/flogo.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-9'>
                        <div className='footerd1'>
                            <img className="img-fluid" alt={FLogo} src={FLogo} />
                            <h5>© 2022. All rights reserved.</h5>
                        </div>
                    </div>
                    <div className='col-lg-6 col-3'>
                        <div className='footerd2'>
                            <NavLink href='/'><h5>Support</h5></NavLink>
                        </div>
                    </div>
                </div>
                <h6>NSE​ &​ BSE – SEBI Registration no.: INZ000031633 | MCX - SEBI Registration no.: INZ000038238 | CDSL - SEBI Registration no.: IN-DP-431-2019</h6>
            </div>
        </div>
    );
}

export default Footer;