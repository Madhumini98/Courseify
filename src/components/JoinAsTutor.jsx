import React from "react";
import "../styles/JoinAsTutor.css";
import Logo from "../core/logo/logo";

export const JoinAsTutor = () => {
  return (
    <>
      <div className="jtpage">
        <div className="jtrectangle1">
          <div className="jtheader">
            <div className="jtheaderleft">
              <div className="jtlogo">
                <Logo />
              </div>
            </div>
            <div className="jtheadercenter">
              <h1 className="jtheadingtext"> Join Courseify as a Tutor</h1>
            </div>
          </div>
        </div>

        <form action="">
        <div className="center">
        <div className="leftSide">
          <div className="imageProfile">
            <span className="profileText">Profile picture </span>
            <img src="assets/jtimg.png" alt="" className="imagePic" />
          </div>
          <div className="cameraLogo">

            <div className="jtvectorcontainer"></div>
          </div>
          <img src="assets/jtvector.jpg" alt="" className="imageCamera"/>
      
        <div className="inputContents">
        <label htmlFor="" className="formLabel">Full Name</label>
        <input type="text" className="formInput" placeholder="Jonathon Doe"/>
        </div>
        <div className="inputContents">
        <label htmlFor="" className="formLabel">Email</label>
        <input type="email" className="formInput" placeholder="jonathondoe@gmail.com" />
        </div>
        <div className="inputContents">
        <label htmlFor="" className="formLabel">Tele Number</label>
        <input type="tel" className="formInput" placeholder="07xxxxxxxx"/>
        </div>
        <div className="inputContents">
        <label htmlFor="" className="formLabel">Portfolio</label>
        <input type="text" className="formInput" placeholder="www.aaaaaaaaaa.com" />
        </div>
        <div className="inputContents">
        <label htmlFor="" className="formLabel">Linkedin</label>
        <input type="text" className="formInput" placeholder="www.aaaa.linkedin.com" />
        </div>
        </div>
        <div className="rightSide">
        <div className="inputContents">
        <label htmlFor="" className="formLabel">Teaching Experience</label>
        <input type="text" className="formInput" />
        </div>
        <div className="inputContents">
        <label htmlFor="" className="formLabel">Educational Qualifications</label>
        <input type="text" className="formInput" />
        </div>
        <div className="inputContents">
        <label htmlFor="" className="formLabel">Subjects</label>
        <input type="text" className="formInput" />
        </div>
        <div className="inputContents">
        <label htmlFor="" className="formLabel">Level Preferences</label>
        <input type="text" className="formInput" />
        </div>
        <div className="inputContents">
        <label htmlFor="" className="formLabel">Scheduling Flexibility</label>
        <input type="text" className="formInput" />
        </div>
        <div className="inputContents">
        <label htmlFor="" className="formLabel">Teaching Method</label>
        <input type="text" className="formInput" />
        </div>
        <div className="inputContents">
        <label htmlFor="" className="formLabel">Rates and Payment</label>
        <input type="text" className="formInput" />
        </div>

        </div>

        </div>
        </form>
        <div className="jtrectangle2">
            <button className="button"> Save Changes</button>
          </div>
        </div>


    </>
  );
};