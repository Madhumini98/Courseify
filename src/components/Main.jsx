import React from 'react'
import "../styles/Main.css"
import Logo from '../core/logo/logo'
import { Link } from 'react-router-dom'
import { FeaturesBox } from '../core/featuresBox/featuresBox'


export const Main = () => {
  return (
    <>
    <div className="mainHeader">
        <div className="mainHeaderLeft">
            <Logo/>
        </div>
    </div>
    <div className="mainCenter">
        <div className="mainCenterLeft">
            <h1 className="title"> Unlocking <span className='title-color-change'>exceptional education is now a</span> breeze!</h1>
            <p className="mainText">Stay connected with a single platform for daily updates on free, time-limited courses offered by various websites. Unlock a world of learning opportunities!</p>
            <Link to = "/create_account">
                <button className="signingetStratedBtn">Get Started</button>
            </Link>
            <button className="getFreeTrialBtn">Get Free Trial</button>
        </div>
        <div className="mainCenterRight">
            <img src="/assets/mainImage.jpg" alt="" className="mainImg" />
        </div>
    </div>
    <div className="mainFooter">
        <div className='mfbox1'>
            <div className="group1">
                <div className='box1'>
                    <img src = "assets/Group1.jpg" alt='' className='group1img'/>
                    <h1 className='num1'> 10k+ </h1>
                    <p className='def1'> TOTAL COURSES </p>
                </div>
            </div>
            <div className="group2">
                <div className="box2">
                    <img src = "assets/Group2.jpg" alt='' className='group2img'/>
                    <h1 className='num2'> 500+ </h1>
                    <p className='def2'> EXPERT TUTORS </p>
                </div>
            </div>
            <div className="group3">
                <div className="box3">
                    <img src = "assets/Group3.jpg" alt='' className='group3img'/>
                    <h1 className='num3'> 300k+ </h1>
                    <p className='def3'> USERS </p>
                </div> 
            </div>
        </div>
    </div>
    <div className="main2">
        <div className="main2rec1">
        <div className="main2text">
            <p className="main2textheading"> Key Features </p>
        </div>
        <div className="keyfeatures">
            <div className="feature1">
                <FeaturesBox
                    ImageSrc = "assets/f1.png"
                    fline
                    featureTopic = "Comprehensive Courses Catalog"
                    featureText = "Access all free courses on a single platform."
                    imageWidth={65}
                    imageHeight={56}
                    imagepaddingLeft={77}
                    imagemarginTop={67}
                    imagemarginBottom={36}
                />
            </div>
            <div className="feature2">
                <FeaturesBox
                    ImageSrc = "assets/f2.png"
                    fline
                    featureTopic = "User-Friendly Navigation"
                    featureText = "Easily browse and discover courses."
                    imageWidth={114}
                    imageHeight={93}
                    imagepaddingLeft={52}
                    imagemarginTop={43}
                    imagemarginBottom={20.5}
                />
            </div>
            <div className="feature3">
                <FeaturesBox
                    ImageSrc = "assets/f3.png"
                    fline
                    featureTopic = "Financial Accessibility"
                    featureText = "Remove cost barriers for education."
                    imageWidth={67}
                    imageHeight={67}
                    imagepaddingLeft={76}
                    imagemarginTop={56}
                    imagemarginBottom={34}
                />
            </div>
            <div className="feature4">
                <FeaturesBox
                    ImageSrc = "assets/f4.png"
                    fline
                    featureTopic = "Learning"
                    featureTopic2="Roadmaps"
                    featureText = "Follow personalized learning paths."
                    imageWidth={50}
                    imageHeight={58}
                    imagepaddingLeft={84}
                    imagemarginTop={61}
                    imagemarginBottom={38}
                />
            </div>
            <div className="feature5">
                <FeaturesBox
                    ImageSrc = "assets/f5.png"
                    fline
                    featureTopic = "On-Demand"
                    featureTopic2={"Tutors"}
                    featureText = "Purchase tutoring when needed."
                    imageWidth={130}
                    imageHeight={91}
                    imagepaddingLeft={44}
                    imagemarginTop={44}
                    imagemarginBottom={22}
                />
            </div>
        </div>
        </div>
        <div className="main2rec2">
            <div className="rec2container">
                <div className="mainreadytopic">
                    <h1> Ready to Get Started? </h1>
                    <div className="mainreadytext">
                        <p> Register with Us </p>
                    </div>
                </div>
                <div className="mainbutotton">
                    <Link to = "/sign_in">
                        <button className="signinBtn">Sign In</button>
                    </Link>
                    <Link to = "/create_account">
                        <button className="registerBtn">Register</button>
                    </Link>
                    </div>
                </div>
        </div>
    </div>
    <div className="mainabout">
        <div className="mainabouttext">
            <div className="mainabouttitle">
                <h> About Courseify </h>
            </div>
            <div className="mainaboutdesc">
                <p> Courseify is a free educational platform that consolidates a diverse array of free courses available for a limited time on various online learning websites. Our primary objective is to deliver top-notch education that is easily accessible to everyone. At Courseify, we empower learners to tailor their learning experiences to their own pace and schedules, ensuring seamless access to course updates and a comprehensive selection of subjects. Additionally, we offer a variety of user-friendly features, including roadmaps, a robust search function, the ability to engage tutors, and personalized user accounts. </p>
            </div>
        </div>
        <div className="mainaboutimage">
            <img src='assets/mainabout.png' alt="" className='mainaboutpic'/>
        </div>
    </div>
    <div className="getintouchrec1">
        <div className="getintouchtopic">
            <h> Get in Touch </h>
        </div>
        <div className="getintouchdesc">
            <p> Got questions or suggestions? <br/> We're just a message away.</p>
        </div>
        <div className="getintouchform1">
            <input type='text' placeholder='Name' className='Name-main'/>
            <input type='email' placeholder='E-mail' className='Email-main'/>
        </div>
    </div>
    <div className="getintouchrec2">
        <div className="getintouchform2">
            <input type='text' placeholder='Message' className='Message-main'/>
        </div>
        <div className="formsubmitbutton">
            <button className='submitbtn'> Submit </button>
        </div>
        <div className="mainmininav">
            <h> Home </h>
            <h> Courses </h>
            <h1> Courseify </h1>
            <h> Tutors </h>
            <h> Roadmaps </h>
        </div>
        <div className="mainline">

        </div>
        <div className="maincopyright">
            <p>© 2023 Courseify | All Rights Reserved</p>
        </div>
    </div>
    </>
  )
}
