import {useState} from 'react';
import { useUserContext } from '../hooks/contextHooks.js';

const Logout = () => {
  const { handleLogout } = useUserContext();
  const {LoggedOut, setUserLoggedOut} = useState(null);

  if (!LoggedOut) {
    handleLogout();
    setUserLoggedOut(true);
  }

  return (
    <>
      <p>You have been logged out.</p>
    </>
  );
};

export default Logout;
