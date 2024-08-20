import React from 'react';
import './LoginSignup.css';
import email_icon from '../Assets/email.webp';
import user_icon from '../Assets/user.png';
import password_icon from '../Assets/password.png';

var LoginSignup = () =>{
    return (
        <div className='container'>
            <div className='header'>
                <div className="text">Sign UP</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt='' width={24} height={24}/>
                    <input type="text" placeholder='Name' />
                </div>
                <div className="input">
                    <img src={email_icon} alt='' width={24} height={24}/>
                    <input type="email" placeholder='Email' />
                </div>
                <div className="input">
                    <img src={password_icon} alt='' width={24} height={24}/>
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            <div className="forgot-password">
                Forgot Password? <span>Click Here</span>
                <div className="submit-container">
                    <button className='submit'>SignUp</button>
                    <button className='submit'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;