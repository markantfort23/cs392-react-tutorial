import React from 'react';
import '../styles/CourseList.css';

const CourseList = ({ courses, selectedCourses, toggleSelectCourse }) => (
  <div className="course-list">
    {courses.map(course => {
      const isSelected = selectedCourses.includes(course.number);
      return (
        <div 
          key={course.number}  
          className={`course-card ${isSelected ? 'selected' : ''}`} 
          onClick={() => toggleSelectCourse(course.number)}
        >
          <h3>{course.term} CS {course.number}</h3>
          <p>{course.title}</p>
          <p className="meets">{course.meets}</p>
        </div>
      );
    })}
  </div>
);

export default CourseList;

