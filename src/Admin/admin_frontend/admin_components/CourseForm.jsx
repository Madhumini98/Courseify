import React, { useState } from 'react'
import { useCoursesContext } from '../hooks/useCoursesContext'
import './CourseForm.css'

export const CourseForm = () => {
    const { dispatch } = useCoursesContext()
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [enrollees, setEnrollees] = useState('')
    const [rating, setRating] = useState('')
    const [link, setLink] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const course =  {name, category, enrollees, rating, link}

        const response = await fetch('/api/courses', {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields || [])
        }
        if(response.ok){
            setName('')
            setCategory('')
            setEnrollees('')
            setRating('')
            setLink('')
            setError(null)
            setEmptyFields([])
            console.log('New Course Added', json)
            dispatch({type: 'CREATE_COURSE', payload: json})
        }
    }

        return (
            <form className="create" onSubmit={handleSubmit}> 
                <h3> Add a New Course </h3>

                <label> Name of the Course: </label>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className={emptyFields.includes('name') ? 'error' : ''}
                />

                <label> Category to which the course belongs to: </label>
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    className={emptyFields.includes('category') ? 'error' : ''}
                >
                    <option value="">Select a Category</option>
                    <option value="dweb_design">Web Design</option>
                    <option value="programming">Programming</option>
                    <option value="media">Media</option>
                    <option value="business_and_consulting">Business & Consulting</option>
                    <option value="finance_management">Finance Management</option>
                    <option value="science_and_engineering">Science & Engineering</option>
                    <option value="marketing_and_communication">Marketing & Communication</option>
                    <option value="health_and_wellness">Health & Wellness</option>
                    <option value="self_development">Self-Development</option>
                </select>

                <label> Number of students enrolled: </label>
                <input
                    type="text"
                    onChange={(e) => setEnrollees(e.target.value)}
                    value={enrollees}
                    className={emptyFields.includes('enrollees') ? 'error' : ''}
                />

                <label> Rating of the course: </label>
                <input
                    type="number"
                    onChange={(e) => setRating(e.target.value)}
                    value={rating}
                    className={emptyFields.includes('rating') ? 'error' : ''}
                />

                <label> Link for the course: </label>
                <input
                    type="text"
                    onChange={(e) => setLink(e.target.value)}
                    value={link}
                    className={emptyFields.includes('link') ? 'error' : ''}
                />

                <button> Add Course </button>

                {error && <div className="error">{error}</div>}
            </form>
        )
}
