import React, { useState } from 'react';
import TermSelector from './TermSelector';
import CourseList from './CourseList';
import CoursePlanPopup from './CoursePlanPopup';

const ByTermPage = ({ courses }) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const filteredCourses = courses.filter(course => course.term === selectedTerm);

  const toggleSelectCourse = (courseNumber) => {
    setSelectedCourses(prevSelected =>
      prevSelected.includes(courseNumber)
        ? prevSelected.filter(number => number !== courseNumber)
        : [...prevSelected, courseNumber]
    );
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
          selectedCourses={filteredCourses.filter(course => selectedCourses.includes(course.number))}
          closePopup={closePopup}
        />
      )}
    </div>
  );
};

export default ByTermPage;
