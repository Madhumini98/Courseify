import React from 'react'
import './admin_home.css'
import { useEffect } from 'react'
import { useCoursesContext } from '../hooks/useCoursesContext'

//components
import { Navbar } from '../admin_components/Navbar'
import { CourseDetails } from '../admin_components/courseDetails'
import { CourseForm } from '../admin_components/CourseForm'

export const AdminHome = () => {
 const {courses, dispatch} = useCoursesContext()

  //fetching courses from backend
  useEffect(() => {
    const fetchCourses = async() => {
        const response = await fetch('/api/courses')
        const json = await response.json()

        if(response.ok){
          dispatch({type: 'SET_COURSES', payload: json})
        }
    }
    fetchCourses()
  }, [dispatch])

  return (
    <div>
      <div className="adminHeader">
        <Navbar/>
        <p> Admin Dashboard </p>
      </div>
      <div className="adminBody">
        <div className="admin_courses">
          {courses && courses.map((course)=>(
              <CourseDetails key = {course._id} course={course}/>
          ))}
        </div>
        <CourseForm/>
       </div>
       <div className="footer">

       </div>
    </div>
    
  )
}
