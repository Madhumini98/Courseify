import React from 'react';
import './courseBox.css'

export default function CourseComponent({ imageSrc, courseTitle, courseCount, isFirstCourse }) {
    const courseStyles = isFirstCourse ? {} : { marginTop: '50px' };

  return (
    <div className="course" style= {courseStyles}>
      <div className="box">
        <div className="vector">
          <img src={imageSrc} alt="" className="c" />
        </div>
      </div>
      <div className="ctext">
        <h1 className="coursetext">{courseTitle}</h1>
        <p className="subtext">{`${courseCount}+ courses available`}</p>
      </div>
    </div>
  );
};