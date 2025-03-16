import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Headers from './Header';
import MyBody from './Body';
import MyGame from './Game';

export const NoMatch = () => <div>No match</div>;

export const contentMap = {
  home: { route: "/", path: <Headers id="intro" />, image: "./images/Stock-coding.jpg" },
  about: { route: "/about", path: <MyBody id="aboutme" />, image: "./images/Stock-engineering.jpg" },
  game: { route: "/game", path: <MyGame />, image: "./images/Stock-engineering.jpg" },
  notMatch: { route: "*", path: <NoMatch />, image: "./images/Stock-coding.jpg" },
};

// Social Links Component
const SocialLinks = () => {
  return (
    <div className="social-links">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>  
      {/* eslint-disable */}
      <a href="https://www.linkedin.com/in/jagpreet-g-587977105/" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
      <a href="mailto:j.grewal.official@gmail.com" className="fa fa-google" target="_blank" rel="noopener noreferrer"></a>
      <a href="tel:778-867-9428" className="fa fa-phone" target="_blank" rel="noopener noreferrer"></a>
      <a href="https://github.com/JagpreetGrewal" className="fa fa-github" target="_blank" rel="noopener noreferrer"></a>
    </div>
  );
};

function App() {
  return (
    <Router>
      <SocialLinks />
      {contentMap.home.path}
      {contentMap.about.path}
    </Router>
  );
}

export default App;