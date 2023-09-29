import React from 'react'
import './courseDetails.css'
import { useCoursesContext } from '../hooks/useCoursesContext'

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export const CourseDetails = ({ course }) => {

  const { dispatch } = useCoursesContext()

  const handleClick = async () => {
    const response = await fetch('/api/courses/' + course._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok){
      dispatch({type: 'DELETE_COURSE', payload: json})
    }
  }

  return (
    <div className="course-details">
        <h4> {course.name} </h4>
        <p><strong> Category:  </strong> {course.category}</p>
        <p><strong> Enrollees:  </strong> {course.enrollees}</p>
        <p><strong> Rating:  </strong> {course.rating}</p>
        <p><strong> Link:  </strong> <a href={course.link} className='linktocourse'>{course.link}</a></p>
        <p>  {formatDistanceToNow(new Date(course.createdAt), { addSuffix: true })} </p>
        <span className="material-symbols-outlined" onClick={handleClick}> Delete </span>
    </div>
  )
}
