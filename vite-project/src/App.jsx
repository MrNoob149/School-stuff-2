import {Route, BrowserRouter, Routes} from 'react-router';
import Layout from './components/layout.jsx';
import Home from './views/Home';
import Single from "./views/Single.jsx";
import Profile from "./views/Profile.jsx";
import Upload from "./views/Upload.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/single" element={<Single />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<Upload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App
