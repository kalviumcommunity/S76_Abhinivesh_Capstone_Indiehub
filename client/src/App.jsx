import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import './index.css';
import HomePage from './pages/Homepage';
import DiscoverPage from './pages/DiscoverPage';
// import { Route } from 'react-router-dom';
function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< LandingPage />} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/discover" element={<DiscoverPage/>}/>
      </Routes>
    </Router>
  );
}
export default App;