import React, { useState } from 'react';
import TermSelector from './TermSelector';
import CourseList from './CourseList';

const ByTermPage = ({ courses }) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');

  const filteredCourses = courses.filter(course => course.term === selectedTerm);

  return (
    <div>
      <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
      <CourseList courses={filteredCourses} />
    </div>
  );
};

export default ByTermPage;
