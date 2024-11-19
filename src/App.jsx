import React from 'react';
import Banner from './components/Banner';
import ByTermPage from './components/ByTermPage';
import getCourses from './utilities/getCourses';

const App = () => {
  const { courses, loading } = getCourses();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Banner title="CS Courses for 2018-2019" />
      <ByTermPage courses={courses} />
    </div>
  );
};

export default App;
