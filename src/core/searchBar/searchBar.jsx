import React from 'react'
import './searchBar.css'
import {FaSearch} from "react-icons/fa"

export default function SearchBar() {
  return (
    <div className='searchBar'>
      <FaSearch id='serachIcon'/>
      <input type='search' placeholder='Search' className='SearchBox-main'/>
    </div>
  )
}
