import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Headers from './Header';
import MyBody from './Body';

function App() {

  // This holds links to make it easier to change variables, and it's easier to read and write.
  const contentMap = {
    home: {route: "/", path: <Headers />, image: './images/Stock-coding.jpg',},
    about:  {route: "/about", path: <MyBody />, image: './images/Stock-engineering.jpg'},
  }

  // This image shows up on mouse hovers.
  const [featuredContent, setFeaturedContent] = useState(contentMap.home.image); 

  // This image shows up outside of mouse hovers. This variable is indirectly used through setFeaturedContent via featuredContentDefault
  const [defaultContent, setDefaultContent] = useState(contentMap.home.image); 

  const homeImage = () => {
    setFeaturedContent(contentMap.home.image)
  }

  const aboutImage = () => {
    setFeaturedContent(contentMap.about.image)
  }
  
  // This is async so that the onMouseLeave doesn't leave the link red or something like that.
  // This function ensures the default image displayed below the nav bar updates to the image of the section.
  // That image can still change with hovering, but it will revert to the updated image.
  const featuredContentDefault = async () => {
    setFeaturedContent(defaultContent)
  }

  const defaultHomeImage = () => {
    setDefaultContent(contentMap.home.image)
  }

  const defaulAboutImage = () => {
    setDefaultContent(contentMap.about.image)
  }

  return (
    <Router>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
            <Link 
              to={contentMap.home.route} 
              className="nav-link" 
              onMouseEnter={homeImage} 
              onMouseLeave={featuredContentDefault}
              onClick={defaultHomeImage}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to={contentMap.about.route} 
              className="nav-link" 
              onMouseEnter={aboutImage} 
              onMouseLeave={featuredContentDefault}
              onClick={defaulAboutImage}
            >
              About Me
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li> */}
        </ul>
      </nav>
      <section style={{
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c34',
      }}>
        <img
            src={featuredContent}
            alt='Featured Section Photo'
            style={{
              width: '300px',
              height: '200px',
              outline: '3px solid gold',
              backgroundColor: '#282c34',
            }}
          />
      </section>
      
      <Routes>
        <Route path={contentMap.home.route} element={contentMap.home.path} />
        <Route path={contentMap.about.route} element={contentMap.about.path} />
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
    </Router>    
  );
}

export default App;
