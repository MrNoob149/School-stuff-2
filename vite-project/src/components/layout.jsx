import { Link, Outlet } from 'react-router'
import {useUserContext} from "../hooks/contextHooks.js";
import {useEffect} from "react";
import "tailwindcss";

const Layout = () => {
  const { user, handleAutoLogin } = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);

  return (
    <div className="flex justify-end overflow-hidden m-0 p-0 bg:#333333 *text:white *text-center *display:block p-4 *:hover:bg:#111111">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/upload">Upload</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
            </>

            ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout
