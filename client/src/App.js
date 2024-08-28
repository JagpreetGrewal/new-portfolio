import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Headers from './Header';
import MyBody from './Body';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          {/* <li>
            <Link to="/projects">Projects</Link>
          </li> */}
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<Headers />} />
        <Route path="/about" element={<MyBody />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </Router>    
  );
}

export default App;
