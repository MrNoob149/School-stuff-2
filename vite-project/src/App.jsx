import {useState} from 'react';
import {Route, BrowserRouter, Routes} from 'react-router';
import Layout from './components/ src/components/layout.jsx';
import Home from './views/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Upload" element={<Element />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App
