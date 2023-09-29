import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
  return (
    <div className='navbarcourseify'>
        <NavLink to = "/home">
            <h1 className="home"> Home </h1>
        </NavLink>
        <NavLink to = "/courses">
            <h1 className="courses"> Courses </h1>
        </NavLink>
        <NavLink to = "/tutors">
            <h1 className="tutors"> Tutors </h1>
        </NavLink>
        <NavLink to = "/roadmaps">
            <h1 className="roadmaps"> Roadmaps </h1>
        </NavLink>            
        <NavLink to = "/contact">
            <h1 className="contact"> Contact </h1>
        </NavLink>
    </div>
  )
}
