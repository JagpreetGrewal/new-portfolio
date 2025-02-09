import React from "react";
import "./Body.css"

function Experience() {
  const educationItems = [
    { /* TODO: Image source link then display? */
      /* TODO: Date of graduation in top right like in resume? */
      title: 'B.A.Sc. Computer Engineering',
      institution: 'Simon Fraser University',
      link: 'https://www.sfu.ca/',
      description: 'Graduated'
    },
  ];

  const experienceItems = [
    {
      title: 'Software Engineer, Co-op',
      institution: 'Semtech (Sierra Wireless)',
      duration: 'September 2023 - April 2024',
      link: 'https://www.sierrawireless.com/',
      descriptions: ['Designed Python scripts to streamline hardware testing by automating radio frequency changes, reducing testing time from 20+ minutes to 4 minutes',
        'Refactored a C++ data logging tool to securely package and email logs, implementing batch emailing and sanity testing',
        'Improved test setup and measurement tools in C#, implementing multi-threading, ensuring accurate data collection, and reducing debugging time',
        'Performed data analytics with Visual Basic scripts, reducing analysis time by 30% and ensuring compliance of lab machines within tolerance levels',
      ],
    },
    {
      title: 'Deployment Engineer, Co-op',
      institution: 'Microserve',
      duration: 'January 2021 - August 2021',
      link: 'https://www.microserve.ca/',
      descriptions: ['Reduced installation time by 20% by implementing Batch and Python scripts that automatically queried and saved hardware information to an online database',
        'Set up over 500 electronics for clients, ensuring compliance with technical and software specifications and mastering diverse installation procedures to achieve high accuracy and reliability',
        'Contributed to dynamic teams of 3-8 members, ensuring timely project completion and training new employees',
      ],
    },    
  ];


  const projectItems = [
    {
      title: 'My Portfolio',
      descriptions: ['Developed an interactive MERN-stack portfolio website showcasing my skills and projects, including a custom GODOT mini-game offering 3 minutes of free gameplay to enhance visitor engagement',
        'Improved software reliability by identifying and resolving bugs, achieving 93% coverage on server- and client-side code with Jest unit tests'],
      duration: 'September 2024 - October 2024',
      link: 'https://github.com/JagpreetGrewal/new-portfolio',
      skills: ['ReactJS', 'Node.js', 'Express', 'MongoDB', 'Axios', 'Resend', 'Heroku', 'Netlify', 'CSS', 'GODOT', 'Github', 'REST APIs'],
    },
    {
      title: 'Pathloss Testing',
      descriptions: ['Tested pathloss rapidly across 2.4 GHz and 5 GHz frequencies in lab machines by developing a Python application that integrated SCPI commands to communicate with the hardware', 
        'Enchanced data accuracy by 70% by analyzing sensor data with NumPy', 
        'Printed CSV and YAML logs that asserted compliance within pathloss limits and within a designated delta of historical logs by using Python scripts',],
      duration: 'November 2023 - April 2024',
      link: '',
      skills: ['Python', 'Github', 'SCPI', 'RsCmwGprfMeas','YAML', 'Batch Script'],
    },
    {
      title: 'KickPro',
      descriptions: ['Designed and prototyped a ball-launcher system utilizing a Raspberry Pi, integrating I2C for hardware communication and OpenCV for real-time image processing',
        'Coded wireless process sharing to improve OpenCV processing time by 100%, using Python and Bash scripts to offload work from the embedded device to a laptop',
        'Created PCB designs using Altium and frame designs with AutoCAD, reducing development cycles by 25%'
      ],
      duration: 'January 2023 - August 2024',
      link: 'https://github.com/JagpreetGrewal/Capstone',
      skills: ['Python', 'Github', 'OpenCV', 'Bash Script', 'I2C', 'Tkinter'],
    },
    {
      title: 'Yet Another Storage Engine',
      descriptions: ['Implemented a relational database engine using optimized concurrent C++ code for indexing, locking, logging, and storage modules, enabling the engine to process over 300 transactions per second',
        'Achieved synchronization of data-intensive transactions with a 0% rate of deadlocking, implementing stress testing and monitoring alongside threads, processes, and hierarchical locking rules with a wait-die policy',
        'Improved database reliability by identifying and resolving bugs through implementation of unit tests with GoogleTest',
      ],
      duration: 'January 2023 - August 2023',
      link: '#',
      skills: ['C++', 'CMake', 'Gitlab'],
    },
  ];

  return (
    <div className="resume-container">
      <h2>Education</h2>
      <div className="resume-section">
        {educationItems.map((item, index) => (
          <a href={item.link} key={index} className="resume-box" target="_blank" rel="noopener noreferrer">
            <h3>{item.title}</h3>
            <p>{item.institution}</p>
            <p style={{'font-style': 'italic', 'font-size': '14px'}}>{item.description}</p>
          </a>
        ))}
      </div>

      <h2>Experience</h2>
      <div className="resume-section">
        {experienceItems.map((item, index) => (
          <a href={item.link} key={index} className="resume-box" target="_blank" rel="noopener noreferrer">
            <h3>{item.title}</h3>
            <p>{item.institution}</p>
            <p style={{'font-style': 'italic', 'font-size': '14px'}}>{item.duration}</p>
            <div className="projects-container">
              <p>{item.descriptions.map( (description, descriptionIndex) => (
                <li key={descriptionIndex} className="project-box">{description}</li>
              ) )}</p>
            </div>
          </a>
        ))}
      </div>

      <h2>Projects</h2>
      <div className="resume-section">
        {projectItems.map((item, index) => (
          <a href={item.link} key={index} className="resume-box" target="_blank" rel="noopener noreferrer">
            <h3>{item.title}</h3>
            <p style={{'font-style': 'italic', 'font-size': '14px'}}>{item.duration}</p>
            <div className="projects-container">
              <p>{item.descriptions.map( (description, descriptionIndex) => (
                <li key={descriptionIndex} className="project-box">{description}</li>
              ) )}</p>
            </div>
            <div className="skills-container">
              {item.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-box">{skill}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );

} 

export default function MyBody() {
    return (
        <section className="AboutMe">
            <Experience />
        </section>
    );
}