import {createContext, useState} from 'react';
import {useAuthentication, useUser} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';

const UserContext = createContext(null);

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const {postLogin} = useAuthentication();
  const {getUserByToken} = useUser();
  const navigate = useNavigate();

  // login, logout and autologin functions are here instead of components
  const handleLogin = async (credentials) => {
    try {
      // TODO: post login credentials to API
      const Login = await postLogin(credentials)

      // TODO: set token to local storage
      const token = Login(token)
      localStorage.setItem('token', token)

      // TODO: set user to state
      const userResult = getUserByToken(token)
      setUser(userResult.user)

      // TODO: navigate to home
      navigate('/')
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('token')
      console.log('removed')

      setUser(null)
      console.log('nulled')

      navigate(location.pathname)
      console.log('/')
      // TODO: remove token from local storage
      // TODO: set user to null
      // TODO: navigate to home or login page
    } catch (e) {
      console.log(e.message);
    }
  };

  // handleAutoLogin is used when the app is loaded to check if there is a valid token in local storage
  const handleAutoLogin = async () => {
    try {
      const token = localStorage.getItem('token')
      if (token) {
        const userResult = await getUserByToken(token)
        setUser(userResult.user)


        console.log("Location", location)
        navigate(location.pathname);
      }
      // TODO: get token from local storage
      // TODO: if token exists, get user data from API
      // TODO: set user to state
      // TODO: navigate to home
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <UserContext.Provider value={{user, handleLogout, handleLogin, handleAutoLogin}}>
      {children}
    </UserContext.Provider>
  );
};
export {UserProvider, UserContext};

