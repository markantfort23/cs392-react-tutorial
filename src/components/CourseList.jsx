import React, { useState } from 'react';
import CourseForm from './CourseForm';
import '../styles/CourseList.css';

const CourseList = ({ courses, selectedCourses, toggleSelectCourse }) => {
  const [editingCourse, setEditingCourse] = useState(null);

  const handleEditClick = (course) => {
    setEditingCourse(course);
  };

  const handleCancel = () => {
    setEditingCourse(null);
  };

  return (
    <div className="course-list">
      {courses.map(course => {
        const isSelected = selectedCourses.some(selected => selected.number === course.number);
        const isConflict = hasConflictWithSelected(course, selectedCourses) && !isSelected;

        return (
          <div
            key={course.number}
            className={`course-card ${isSelected ? 'selected' : ''} ${isConflict ? 'unselectable' : ''}`}
          >
            <h3>{course.term} CS {course.number}</h3>
            <p>{course.title}</p>
            <p className="meets">{course.meets}</p>
            <button className="edit-button" onClick={() => handleEditClick(course)}>
              ✎
            </button>
          </div>
        );
      })}
      {editingCourse && (
        <CourseForm course={editingCourse} onCancel={handleCancel} />
      )}
    </div>
  );
};

export default CourseList;
