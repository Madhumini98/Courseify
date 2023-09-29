import "../styles/AboutUs.css";
import Logo from '../core/logo/logo'
import Profile from '../core/profile/profile'
import Notification from '../core/notification/notification'
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'



function About() {
  return (
    <>
        <div className="auheader">
            <div className="auheaderleft">
                <Logo/>
            </div>
            <div className="auheadercenter">
                <div className="auheadertextmain">
                    <h1 className="auheadertext"> About Us </h1>
                </div>
            </div>
            <div className="auheaderright">
                <Notification/>
                <Profile/>
            </div>
        </div>
        <div className="aucenterpart">
            <div className="aucenterleft">
                <p>We are a group of 3rd-year undergraduates from the Department of Computing and Information Systems at the Faculty of Computing, Sabaragamuwa University of Sri Lanka. As part of our mini project, we have created this platform to provide daily updates on courses that are available for free for a limited time through various course providers. Our website categorizes these courses based on subjects, making it easier for users to find courses that align with their interests. Each course is linked to the organization's website where it is offered for free, allowing users to access the course directly. 
<br/> We are dedicated to continuously improving this platform and plan to introduce additional special features in the future. If you have any questions or encounter any issues, please feel free to reach out to us using the contact details provided below. Thank you for visiting our website, and we hope you find it valuable in your pursuit of knowledge.</p>  
            </div>
            <div className="aucenterright">
                <div className="a-card">
                    <h2>10k+</h2>
                    <p>Total Courses</p>
                </div>
                <div className="a-card">
                    <h2>500+</h2>
                    <p>Expect Tutors</p>
                </div>
                <div className="a-card">
                    <h2>300k+</h2>
                    <p>Users</p>
                </div>
                <div className="a-card">
                    <h2>50+</h2>
                    <p>Roadmaps</p>
                </div>
            </div>
        </div>
        <div className="aufooter">
            <div className="aumessageicon">
                <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="aucallicon">
                <FontAwesomeIcon icon={faPhoneAlt}/>
            </div>
            <div className="aulinkedinicon">
                <FontAwesomeIcon icon={faLinkedin}/>
            </div>
        </div>
        </>
  );
}

export default About;