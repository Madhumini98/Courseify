import React, {useState} from 'react'
import '../styles/ForgotPassword.css'
import Logo from '../core/logo/logo'
import {FaSearch} from "react-icons/fa"
import { Link } from 'react-router-dom'

export const ForgotPassword = () => {
    const [isMessageVisible, setMessageVisible] = useState(false);

  // Function to handle the "Reset Password" button click
  const handleResetPasswordClick = () => {
    // Logic to send the reset password email here

    // Show the message
    setMessageVisible(true);

    // You can also set a timer to hide the message after a few seconds if needed
    setTimeout(() => {
      setMessageVisible(false);
    }, 3000); // Hide the message after 5 seconds (adjust the time as needed)
  };

  return (
    <>
    <div className="fpupperrec">
        <div className="fpheader">
            <div className="fpheaderleft">
                <Logo/>
            </div>
            <div className="fpheadercenter">
                <div className="fplongsearchbar">
                    <FaSearch id='serachIcon3'/>
                    <input type='search' placeholder='Search for Anything' className='SearchBox3-main'/>
                </div>
            </div>
            <div className="fpheaderright">
                <div className="mainHeaderRight">
                    <Link to = "/sign_in">
                        <button className="signinBtn">Sign In</button>
                    </Link>
                    <Link to = "/create_account">
                        <button className="registerBtn">Register</button>
                    </Link>
                </div>
            </div>
        </div>
            <div className="fpcenter">
                <div className="fpcentertext">
                    <p className="fptextmain">
                        Forgot Password?
                    </p>
                </div>
                <div className="fpemailbox">
                     <input type='email' placeholder='Email' className='EmailBox-main'/>
                </div>
                <div className="fpbutton">
                    <button className='Resetpwd' onClick={handleResetPasswordClick}>Reset Password</button>
                </div>

                {/* Display the message if isMessageVisible is true */}
                {isMessageVisible && (
                <div className="message-popup">
                    <p className='message-popuptitle'>Reset Password Email Sent</p>
                    <p className='message-popuptext'>You should soon receive an email allowing you to reset your password. Please make sure to check your spam and trash if you can't find the email.</p>
                    </div>
                )}
            </div>
    </div>
    <div className="fpbottomrec">
        <div className="straightline">
            <div className="straightlinebefore">
            </div>
            <p className="fpor"> or </p>
            <div className="straightlineafter">
            </div>
        </div>
        <Link to = "/sign_in">
            <button className="fpsigninBtn">Sign In</button>
        </Link>
    </div>

    
    </>
  )
}
