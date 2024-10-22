import React from 'react';
import Banner from './components/Banner';
import CourseList from './components/CourseList';
import getCourses from './utilities/getCourses';

const App = () => {
  const { data, error, isLoading } = getCourses();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const coursesArray = data ? Object.values(data.courses) : [];

  return (
    <div>
      <Banner title={data.title} />
      {coursesArray.length > 0 ? <CourseList courses={coursesArray} /> : <div>No courses available</div>}
    </div>
  );
};

export default App;
