import React from 'react'
import './pcCourseBox.css'

export default function courseCard({ imageSrc, title, category, viewsCount, rating, isFirstCourse, highlightLength }) {
  const courseStyles = isFirstCourse ? {marginTop: '50px'} : { };
  const highlightStyle = {
    width: highlightLength ? `${highlightLength}px` : 'auto'
  };

  return (
    <>
      <div className="pccrse" style= {courseStyles}>
        <div className="pcouterbox">
          <div className="pcimg">
            <img src={imageSrc} alt="" className="crseimg" />
          </div>
          <h1 className="crsedesc">{title}</h1>
          <div className="crsedescbox">
            <div className="crsehighlight" style={highlightStyle}>
              <p className="crsehighlighttxt">{category}</p>
            </div>
          <div className="pcviews">
            <img src="assets/pcicon.png" alt="" className="pcicon" />
            <p className="crsetxt">{viewsCount}</p>
          </div>
          <div className="pcrating">
            <img src="assets/pcvector.png" alt="" className="pcstar" />
            <p className="pcratingcount">{rating}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}