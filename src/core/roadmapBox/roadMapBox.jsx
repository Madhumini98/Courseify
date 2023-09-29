import React from 'react'
import './roadMapBox.css'

export default function RoadMapCard( {title, isFirstRoadMap} ) {
  const courseStyles = isFirstRoadMap ? {marginTop: '30px'} : { };
  return (
    <>
    <div className="rmcourse">
        <div className="rmouterbox">
            <div className="rmdefinition" style={courseStyles}> { title } </div>
        </div>
    </div>
    </>
  )
}
