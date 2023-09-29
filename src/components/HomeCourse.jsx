import React from 'react'
import '../styles/HomeCourse.css'
import Logo from '../core/logo/logo'
import Notification from '../core/notification/notification'
import Profile from '../core/profile/profile'
import SearchBar from '../core/searchBar/searchBar'
import {FaSearch} from "react-icons/fa"
import CourseComponent from '../core/courseBox/courseBox'

export const HomeCourse = ()=> {
  return (
    <>
    <div className="homecourseHeader">
        <div className="hcheaderleft">
            <div className="hclogo">
                <Logo/>
            </div>
        </div>
        <div className="hcheadercenter">
            <div className="hctitle">
                <h1 className="text1"> Explore Courses by Category </h1>
            </div>
            <div className="hcsearchbar">
                <SearchBar/>
            </div>
        </div>
        <div className="hcheaderright">
            <div className="hcnotification">
                <Notification/>
            </div>
            <div className="hcprofile">
                <Profile/>
            </div>
        </div>
    </div>
    <div className="longtext">
        <p className="lngtxt"> Discover a world of top-class, free courses effortlessly by exploring our user-friendly categories. Your learning journey made easier! </p>
    </div>
    <div className="longsearchbar">
        <FaSearch id='serachIcon2'/>
        <input type='search' placeholder='Search for Anything' className='SearchBox2-main'/>
    </div>
    <div className="hclistofcourses">
        <div className="hcline1">
            <CourseComponent
                imageSrc="/assets/Vector1.jpg"
                courseTitle="Web Design"
                courseCount={250}
                isFirstCourse
            />
            <CourseComponent
                imageSrc="/assets/Vector2.jpg"
                courseTitle="Business & Consulting"
                courseCount={170}
            />
            <CourseComponent
                imageSrc="/assets/Vector3.jpg"
                courseTitle="Marketing & Communication"
                courseCount={300}
            />
        </div>
        <div className="hcline2">
            <CourseComponent
                imageSrc="/assets/Vector4.jpg"
                courseTitle="Programming"
                courseCount={400}
                isFirstCourse
            />
            <CourseComponent
                imageSrc="/assets/Vector5.jpg"
                courseTitle="Finance Management"
                courseCount={300}
            />
            <CourseComponent
                imageSrc="/assets/Vector6.jpg"
                courseTitle="Health & Wellness"
                courseCount={300}
            />
        </div>
        <div className="hcline3">
            <CourseComponent
                imageSrc="/assets/Vector7.jpg"
                courseTitle="Media"
                courseCount={150}
                isFirstCourse
            />
            <CourseComponent
                imageSrc="/assets/Vector8.jpg"
                courseTitle="Science & Engineering"
                courseCount={350}
            />
            <CourseComponent
                imageSrc="/assets/Vector9.jpg"
                courseTitle="Self Development"
                courseCount={50}
            />
        </div>
    </div>
    </>
  )
}
