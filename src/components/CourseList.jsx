import React from 'react';

const CourseList = ({ courses }) => (
  <ul>
    {Object.keys(courses).map(courseId => {
      const course = courses[courseId];
      return (
        <li key={courseId}>
          {course.term} {course.number}: {course.title} - {course.meets}
        </li>
      );
    })}
  </ul>
);

export default CourseList;
