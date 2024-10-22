import React from 'react';
import '../styles/CourseList.css';

const CourseList = ({ courses }) => {
  if (!Array.isArray(courses)) {
    return <div>Courses currently unavailable</div>;
  }

  return (
    <div className="course-list">
      {courses.map(course => (
        <div key={course.id} className="course-card">
          <h3>{course.term} CS {course.number}</h3>
          <p>{course.title}</p>
          <p className="meets">{course.meets}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
