import {Route, BrowserRouter, Routes} from 'react-router';
import Layout from './components/layout.jsx';
import Home from './views/Home';
import Single from "./views/Single.jsx";
import Profile from "./views/Profile.jsx";
import Upload from "./views/Upload.jsx";
import Login from "./views/Login.jsx"
import Logout from "./views/Logout.jsx"
import {UserProvider} from './contexts/UserContext';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/single" element={<Single />} />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route path="/upload" element={<Upload />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>

          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};
export default App
