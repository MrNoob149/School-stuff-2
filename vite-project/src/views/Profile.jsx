import { useState, useEffect } from 'react';
import { useUser } from '../hooks/apiHooks.js';

const Profile = () => {
  const [user, setUser] = useState(null);
  const { getUserByToken } = useUser();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          console.log('Not found');
          return;
        }

        const userResult = await getUserByToken(token);

        console.log('info', userResult);
        setUser(userResult);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Profile page</p>
    </div>
  );
};

export default Profile;
