import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Body.css"

function Experience() {
  const educationItems = [
    { /* TODO: Image source link then display? */
      /* TODO: Date of graduation in top right like in resume? */
      title: 'B.A.Sc. Computer Engineering',
      institution: 'Simon Fraser University',
      link: 'https://www.sfu.ca/',
      description: 'May 2024'
    },
  ];

  const experienceItems = [
    {
      title: 'Back-End Software Engineer (Contract, Part-time)',
      institution: 'LM West Financial Corp',
      duration: 'November 2024 - Present',
      link: '#',
      descriptions: [],
      skills: ['Python', 'Github', 'Excel'],
    },    
    {
      title: 'Embedded Software Engineer, Co-op',
      institution: 'Semtech (Sierra Wireless)',
      duration: 'September 2023 - April 2024',
      link: 'https://www.sierrawireless.com/',
      descriptions: ['Designed Python scripts to streamline hardware testing by automating radio frequency changes, reducing testing time from 20+ minutes to 4 minutes',
        'Refactored a C++ data logging tool to securely package and email logs, implementing batch emailing and sanity testing, reducing execution frequency from six times per day to once per day',
        'Improved test setup and measurement tools in C#, implementing multi-threading to display real-time visual data, ensuring accurate data and instructions for workers in factories',
      ],
      // descriptions: [],
      skills: ['Python', 'C++', 'C#', 'Github', 'SCPI', 'RsCmwGprfMeas','YAML', 'Batch Script'],
    },
    {
      title: 'Front-End Software Engineer (Part-time)',
      institution: 'ATP Mortgage Corporation LTD',
      duration: 'November 2021 - April 2022',
      link: 'https://web.archive.org/web/20220517173253/https://atpmortgage.com/',
      descriptions: ['Reduced external contractor costs by $10000 per annum by streamlining routine website updates and improving client-worker communication',
      ],
      skills: ['WordPress', 'PHP'],
    },    
    {
      title: 'Deployment Engineer, Co-op',
      institution: 'Microserve',
      duration: 'January 2021 - August 2021',
      link: 'https://www.microserve.ca/',
      descriptions: ['Reduced installation time by 20% by implementing Batch and Python scripts that automatically queried and saved hardware information to an online database',
      ],
      skills: ['Python', 'Batch Script'],
    },    
  ];


  const projectItems = [
    {
      title: 'My Portfolio',
      descriptions: ['Developed an interactive MERN-stack portfolio website showcasing my skills and projects, including a custom GODOT mini-game offering 3 minutes of free gameplay to enhance visitor engagement',
        'Improved software reliability by identifying and resolving bugs, achieving 93% coverage on server- and client-side code with Jest unit tests',
      ],
      duration: 'September 2024 - October 2024',
      link: 'https://github.com/JagpreetGrewal/new-portfolio',
      skills: ['ReactJS', 'Node.js', 'Express', 'MongoDB', 'Axios', 'Resend', 'Heroku', 'Netlify', 'CSS', 'GODOT', 'Github', 'REST APIs'],
    },
    {
      title: 'Pathloss Testing',
      descriptions: ['Tested pathloss rapidly across 2.4 GHz and 5 GHz frequencies in lab machines by developing a Python application that integrated SCPI commands to communicate with the hardware', 
        'Wrote an algorithm to filter out noise from sensor data and decreased data needs by 30%', 
        'Printed CSV and YAML logs that asserted compliance within pathloss limits and within a designated delta of historical logs by using Python scripts',
      ],
      duration: 'November 2023 - April 2024',
      link: '#intro',
      skills: ['Python', 'Github', 'SCPI', 'RsCmwGprfMeas','YAML', 'Batch Script'],
    },
    {
      title: 'KickPro',
      descriptions: ['Designed and prototyped a ball-launcher system utilizing a Raspberry Pi, integrating I2C for hardware communication and OpenCV for real-time image processing.',
        'Improved OpenCV processing time by 100% through wireless process sharing with Python and Bash scripts to offload work from the embedded device to a laptop',
        'Created PCB designs with Altium and frame designs with AutoCAD, reducing development cycles by 25%'
      ],
      duration: 'January 2023 - August 2024',
      link: 'https://github.com/JagpreetGrewal/Capstone',
      skills: ['Python', 'Github', 'OpenCV', 'Bash Script', 'I2C', 'Tkinter'],
    },
    {
      title: 'Yet Another Storage Engine',
      descriptions: ['Implemented a relational database engine supporting over 300 transactions per second using optimized concurrent C++ code',
        'Designed synchronization mechanisms to prevent deadlocking, maintaining a 0% failure rate',
        'Improved database reliability by identifying and resolving bugs through implementation of unit tests with GoogleTest',
      ],
      duration: 'January 2023 - August 2023',
      link: '#aboutme',
      skills: ['C++', 'CMake', 'Gitlab', 'GoogleTest'],
    },
  ];

  const targetRef = useRef(null);
  const [activeUniIndex, setUniActiveIndex] = useState(null);
  const [activeExpIndex, setExpActiveIndex] = useState(null);
  const [activeProjectIndex, setProjectActiveIndex] = useState(null);

  const toggleUniObject = (index) => {
    setUniActiveIndex(activeUniIndex === index ? null : index);
  };
  const toggleExpObject = (index) => {
    setExpActiveIndex(activeExpIndex === index ? null : index);
  };
  const toggleProjectObject = (index) => {
    setProjectActiveIndex(activeProjectIndex === index ? null : index);
  };  

  useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible3');
              console.log('visible3')
            } else {
              entry.target.classList.remove('visible3');
              console.log('invisible3')
            }
          });
        },
        { threshold: 0.2 }
      );
  
      observer.observe(targetRef.current);
  
      return () => {
        observer.disconnect();
      };
    }, []);    

  return (
    <div className="About-me">
      <div className="resume-container" ref={targetRef}>
        <h2 className="resume-title">Education</h2>
        <div className="resume-section">
          {educationItems.map((item, index) => (
            <div key={index} className="resume-item">
              <button
                className={`resume-header ${
                  activeUniIndex === index ? "active" : ""
                }`}
                onClick={() => toggleUniObject(index)}
              >
                <span className="job-title">{item.title}</span>
                <span className="icon">{activeUniIndex === index ? "−" : "+"}</span>
              </button>
              <div
                className={`resume-content ${
                  activeUniIndex === index ? "open" : ""
                }`}
              >
                <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">
                  <p className="job-period" style={{"text-decoration": "underline"}}>{item.institution}</p>
                  <p className="job-period"><em>{item.description}</em></p>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <h2 className="resume-title">Experience</h2>
        <div className="resume-section">
            {experienceItems.map((item, index) => (
              <div key={index} className="resume-item">
                <button
                  className={`resume-header ${
                    activeExpIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleExpObject(index)}
                >
                  <span className="job-title">{item.title}</span>
                  <span className="icon">{activeExpIndex === index ? "−" : "+"}</span>
                </button>
                <div
                  className={`resume-content ${
                    activeExpIndex === index ? "open" : ""
                  }`}
                >
                  <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">
                    <p className="job-period" style={{"text-decoration": "underline"}}>{item.institution}</p>
                    <p className="job-period"><em>{item.duration}</em></p>
                    <div className="job-details">
                      <p>{item.descriptions.map( (description, descriptionIndex) => (
                        <li key={descriptionIndex}>{description}</li>
                      ) )}</p>
                    </div>
                    <div className="skills-container">
                    {item?.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-box">{skill}</span>
                    ))}
                    </div>                    
                  </a>
                </div>
              </div>
            ))}
        </div>


        <h2 className="resume-title">Projects</h2>
        <div className="resume-section">
          {projectItems.map((item, index) => (
            <div key={index} className="resume-item">
              <button
                className={`resume-header ${
                  activeProjectIndex === index ? "active" : ""
                }`}
                onClick={() => toggleProjectObject(index)}
              >
                <span className="job-title">{item.title}</span>
                <span className="icon">{activeProjectIndex === index ? "−" : "+"}</span>
              </button>
              <div
              className={`resume-content ${
                activeProjectIndex === index ? "open" : ""
              }`}
              >
                <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">
                  <p className="job-period"><em>{item.duration}</em></p>
                  <div className="job-details">
                    <p>{item.descriptions.map( (description, descriptionIndex) => (
                      <li key={descriptionIndex} >{description}</li>
                    ) )}</p>
                  </div>
                  <div className="skills-container">
                    {item.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-box">{skill}</span>
                    ))}
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

} 

export default function MyBody() {
    return (
      <Experience />
    );
}