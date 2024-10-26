import React, { useState } from 'react';
import TermSelector from './TermSelector';
import CourseList from './CourseList';
import CoursePlanPopup from './CoursePlanPopup';
import { hasConflictWithSelected } from '../utilities/timeConflicts';

const ByTermPage = ({ courses }) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const filteredCourses = courses.filter(course => course.term === selectedTerm);

  const toggleSelectCourse = (course) => {
    setSelectedCourses(prevSelectedCourses => {
      const isSelected = prevSelectedCourses.some(selected => selected.number === course.number);

      if (isSelected) {
        return prevSelectedCourses.filter(selected => selected.number !== course.number);
      } else if (!hasConflictWithSelected(course, prevSelectedCourses)) {
        return [...prevSelectedCourses, course];
      }
      return prevSelectedCourses;
    });
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div className="header">
        <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
        <button className="course-plan-button" onClick={openPopup}>Course Plan</button>
      </div>
      <CourseList
        courses={filteredCourses}
        selectedCourses={selectedCourses}
        toggleSelectCourse={toggleSelectCourse}
      />
      {isPopupOpen && (
        <CoursePlanPopup
          selectedCourses={selectedCourses}
          closePopup={closePopup}
        />
      )}
    </div>
  );
};

export default ByTermPage;
