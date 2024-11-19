import { useState, useEffect } from 'react';
import { database } from './firebase';
import { ref, get } from 'firebase/database';
import { auth } from './firebase';

const useUserRole = () => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (auth.currentUser) {
        const userUID = auth.currentUser.uid;
        const roleRef = ref(database, `roles/${userUID}`);
        try {
          const snapshot = await get(roleRef);
          if (snapshot.exists()) {
            setRole(snapshot.val());
          } else {
            setRole(null);
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
        }
      }
      setLoading(false);
    };

    fetchUserRole();
  }, [auth.currentUser]);

  return { role, loading };
};

export default useUserRole;
