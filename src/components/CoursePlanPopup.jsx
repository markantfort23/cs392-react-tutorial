import React from 'react';
import '../styles/CoursePlanPopup.css';

const CoursePlanPopup = ({ selectedCourses, closePopup }) => {
  const handleOutsideClick = (e) => {
    if (e.target.className === 'popup-overlay') {
      closePopup();
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOutsideClick}>
      <div className="popup-content">
        <button className="close-button" onClick={closePopup}>X</button>
        <h2>Your Course Plan</h2>
        {selectedCourses.length > 0 ? (
          <ul>
            {selectedCourses.map(course => (
              <li key={course.number}>
                <strong>{course.number}:</strong> {course.title} - {course.meets}
              </li>
            ))}
          </ul>
        ) : (
          <div>
            <p>No courses currently selected.</p>
            <p>Click on courses to select them for your plan -- they will highlight in blue when selected.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePlanPopup;
