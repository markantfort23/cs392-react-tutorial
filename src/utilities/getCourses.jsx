import { useQuery } from '@tanstack/react-query';

const fetchCourses = async () => {
  const response = await fetch('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  if (!response.ok) {
    throw new Error('Bad network response');
  }
  return response.json();
};

const getCourses = () => {
  return useQuery({
    queryKey: ['courses'],
    queryFn: fetchCourses
  });
};

export default getCourses;
