import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Headers from './Header';
import MyBody from './Body';
import MyGame from './Game';

export const NoMatch = () => <div>No match</div>

// This holds links to make it easier to change variables, and it's easier to read and write.
export const contentMap = {
  home: {route: "/", path: <Headers id="intro"/>, image: './images/Stock-coding.jpg',},
  about:  {route: "/about", path: <MyBody id="aboutme"/>, image: './images/Stock-engineering.jpg'},
  game: {route: "/game", path: <MyGame />, image: './images/Stock-engineering.jpg'},
  notMatch: {route: "*", path: <NoMatch />, image: './images/Stock-coding.jpg'},
}

function App() {

  return (
    <Router>
    {/* <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
            <Link 
              to={contentMap.home.route} 
              className="nav-link" 
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to={contentMap.about.route} 
              className="nav-link" 
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to={contentMap.game.route} 
              className="nav-link" 
            >
              Play My Game
            </Link>
          </li>
        </ul>
      </nav>

       */}
      {/* <Routes>
        <Route path={contentMap.home.route} element={contentMap.home.path} />
        <Route path={contentMap.about.route} element={contentMap.about.path} />
        <Route path={contentMap.game.route} element={contentMap.game.path} />
        <Route path={contentMap.notMatch.route} element={contentMap.notMatch.path}/> */}
        {/* <Route path="/projects" element={<Projects />} />  */}
      {/* </Routes> */}
    {contentMap.home.path} 
    {contentMap.about.path}
    {/* {contentMap.game.path} */}
    </Router>    
  );
}

export default App;
