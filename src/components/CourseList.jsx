import React from 'react';
import { hasConflictWithSelected } from '../utilities/timeConflicts';
import '../styles/CourseList.css';

const CourseList = ({ courses, selectedCourses, toggleSelectCourse }) => (
  <div className="course-list">
    {courses.map(course => {
      const isSelected = selectedCourses.some(selected => selected.number === course.number);
      const isConflict = hasConflictWithSelected(course, selectedCourses) && !isSelected;

      return (
        <div
          key={course.number}
          className={`course-card ${isSelected ? 'selected' : ''} ${isConflict ? 'unselectable' : ''}`}
          onClick={() => !isConflict && toggleSelectCourse(course)}
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
