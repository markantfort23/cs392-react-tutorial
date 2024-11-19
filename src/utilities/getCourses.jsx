import { useEffect, useState } from 'react';
import { database } from './firebase';
import { ref, get } from 'firebase/database';

const getCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseRef = ref(database, 'courses');
        const snapshot = await get(courseRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const formattedCourses = Object.values(data).map((course) => ({
            ...course,
            id: course.number,
          }));
          setCourses(formattedCourses);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading };
};

export default getCourses;
