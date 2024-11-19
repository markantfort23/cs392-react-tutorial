import React, { useState } from 'react';
import useAuth from '../utilities/useAuth';
import CourseForm from './CourseForm';
import { hasConflictWithSelected } from '../utilities/timeConflicts';
import '../styles/CourseList.css';

const CourseList = ({ courses, selectedCourses, toggleSelectCourse }) => {
  const { user } = useAuth();
  const [editingCourse, setEditingCourse] = useState(null);

  const handleEditClick = (e, course) => {
    e.stopPropagation();
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
            onClick={() => !isConflict && toggleSelectCourse(course)}
          >
            <h3>{course.term} CS {course.number}</h3>
            <p>{course.title}</p>
            <p className="meets">{course.meets}</p>
            {user && (
              <button className="edit-button" onClick={(e) => handleEditClick(e, course)}>
                ✎
              </button>
            )}
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
