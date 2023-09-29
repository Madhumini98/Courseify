import Logo from "../core/logo/logo";
import Notification from "../core/notification/notification";
import Profile from "../core/profile/profile";
import SearchBar from "../core/searchBar/searchBar";
import '../styles/FindTutors.css';
import { Link } from "react-router-dom";

export const FindTutors = () => {
  return (
    <>
        <div className="findTutorsHeader">
          <div className="ftheaderleft">
              <Logo />
          </div>
          <div className="ftheadercenter">
            <div className="fttitle">
              <h1 className="text1"> Find the Right Tutors for You </h1>
            </div>
          </div>
          <div className="ftheaderright">
               <SearchBar />
              <Notification />
              <Profile />
          </div>
        </div>

        <div class="imageArea">
          <div className="ftgroup1">
            <div className="ftbox1">
              <img src="/assets/ftimg1.png" alt="" className="image1" />
              <div className="imgtxt1">Malala Yousafzai</div>

              <div className="mixed">
                <div className="imgtxt2">Expert in Sociology </div>
                <img src="/assets/pcvector.png" alt="" className="pcvector" />
                <div className="imgtxt3">$8 </div>
              </div>
            </div>
          </div>

          <div className="ftgroup2">
            <div className="ftbox2">
              <img src="/assets/ftimg2.png" alt="" className="image1" />
              <div className="imgtxt1">Jonathan Doe </div>
              <div className="mixed">
                <div className="imgtxt2">Expert in Sociology </div>
                <img src="/assets/pcvector.png" alt="" className="pcvector" />
                <div className="imgtxt3">$8 </div>
              </div>
            </div>
          </div>

          <div className="ftgroup3">
            <div className="ftbox3">
              <img src="/assets/ftimg3.png" alt="" className="image1" />
              <div className="imgtxt1"> Katherine Johnson</div>
              <div className="mixed">
                <div className="imgtxt2">Expert in Sociology </div>
                <img src="/assets/pcvector.png" alt="" className="pcvector" />
                <div className="imgtxt3">$8 </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="buttonClass">
          <button className="button1">View More</button>
        </div>

        {/* ) */}
        <div className="footer">
          <img src="/assets/hand.png" alt="" className="image4" />

          <div className="txt1">Become a Tutor Today</div>
          <div className="txt2">
            Embark on an educational journey with <br />
            Courseify Tutors Marketplace.
          </div>
          <Link to={'/join_as_tutor'}>
            <div>
              <button className="button2">Get Started</button>
            </div>
          </Link>
        </div>
    </>
  );
};