import React from 'react'
import '../styles/PopularCourses.css'
import Logo from '../core/logo/logo'
import Notification from '../core/notification/notification'
import Profile from '../core/profile/profile'
import CourseCard from '../core/pcCourseBox/pcCourseBox'
import { Link } from 'react-router-dom'

export const PopularCourses = () => {
  return (
    <>
        <div className="pcheader">
            <div className="pcheaderleft">
                <div className="pclogo">
                    <Logo/>
                </div>
            </div>
            <div className="pcheadercenter">
                <div className="pctitle">
                    <h1 className="pctext"> Popular Courses for You </h1>
                </div>
                <Link to = "/courses_by_category">
                    <button className="allcategorybtn"> All Category </button>
                </Link>
            </div>
            <div className="pcheaderright">
                <div className="pcnotification">
                    <Notification/>
                </div>
                <div className="pcprofile">
                    <Profile/>
                </div>
            </div>
        </div>
        <div className="pclongtext">
            <p className="pclngtxt"> Experience a daily adventure of discovering time-limited, free courses offered by a multitude of websites. Stay ahead of the learning curve! </p>
        </div>
        <div className="coursecontainer">
            <div className="pcline1">
                <CourseCard
                    imageSrc="assets/pcimg1.png"
                    title="Learn Python Programming in 7 Days"
                    category="Programming"
                    viewsCount="400k+"
                    rating="4.8"
                    highlightLength={130}
                />
                <CourseCard
                    imageSrc="assets/pcimg4.png"
                    title="Learn CMS Development"
                    category="Web Design"
                    viewsCount="300k++"
                    rating="4.8"
                    isFirstCourse
                    highlightLength={110}
                />
            </div>
            <div className="pcline2">
                <CourseCard
                    imageSrc="assets/pcimg2.png"
                    title="Learn App Development in 30 Days"
                    category="Web Design"
                    viewsCount="500k+"
                    rating="4.9"
                    highlightLength={110}
                />
                <CourseCard
                    imageSrc="assets/pcimg5.png"
                    title="Complete Web Design Course"
                    category="Web Design"
                    viewsCount="500k+"
                    rating="4.8"
                    isFirstCourse
                    highlightLength={110}
                />
            </div>
            <div className="pcline3">
                <CourseCard
                    imageSrc="assets/pcimg3.png"
                    title="Advance Motion Graphics"
                    category="Web Design"
                    viewsCount="300k+"
                    rating="3.8"
                    highlightLength={110}
                />
                <CourseCard
                    imageSrc="assets/pcimg6.png"
                    title="Advance Photography Course"
                    category="Media"
                    viewsCount="350k+"
                    rating="4.5"
                    isFirstCourse
                    highlightLength={65}
                />
            </div>
        </div>
    </>
  )
}
