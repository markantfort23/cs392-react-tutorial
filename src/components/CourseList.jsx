import React from 'react';
import '../styles/CourseList.css';

const CourseList = ({ courses }) => (
  <div className="course-list">
    {Object.keys(courses).map(courseId => {
      const course = courses[courseId];
      return (
        <div key={courseId} className="course-card">
          <h3>{course.term} CS {course.number}</h3>
          <p>{course.title}</p>
          <p className="meets">{course.meets}</p>
        </div>
      );
    })}
  </div>
);

export default CourseList;
