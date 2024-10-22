import React, { useState } from 'react';
import TermSelector from './TermSelector';
import CourseList from './CourseList';

const ByTermPage = ({ courses }) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const [selectedCourses, setSelectedCourses] = useState([]);

  const filteredCourses = courses.filter(course => course.term === selectedTerm);

  const toggleSelectCourse = (courseNumber) => {
    setSelectedCourses(prevSelected =>
      prevSelected.includes(courseNumber)
        ? prevSelected.filter(number => number !== courseNumber)
        : [...prevSelected, courseNumber]
    );
  };

  return (
    <div>
      <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
      <CourseList
        courses={filteredCourses}
        selectedCourses={selectedCourses}
        toggleSelectCourse={toggleSelectCourse}
      />
    </div>
  );
};

export default ByTermPage;
