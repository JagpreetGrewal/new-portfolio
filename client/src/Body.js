import React from "react";
import "./Body.css"

function Experience() {
  const educationItems = [
    { /* TODO: Image source link then display? */
      /* TODO: Date of graduation in top right like in resume? */
      title: 'B.A.Sc. Computer Engineering',
      institution: 'Simon Fraser University',
      link: 'https://www.sfu.ca/',
      description: 'Graduated May 2024'
    },
  ];

  const experienceItems = [
    {
      title: 'Manufacturing Test Engineer, Co-op',
      institution: 'Semtech (Sierra Wireless)',
      duration: 'September 2023 - April 2024',
      link: 'https://www.sierrawireless.com/',
      descriptions: ['Developed a comprehensive Python test script to reduce testing time from 20+ min to 4 min by automating frequency changes, visualizing signal loss measurements, providing actionable analytics, and optimizing script performance',
        'Wrote a C++ automated data transfer and logging tool, packaging logs from lab machines into organized folders and emailing them to a designated address weekly with the Mailio library',
        'Upgraded a C# time and success measurement tool for lab machines, redesigning the dashboard to include a stop clock and historical success rate graph, as well as removing deadlock bugs by refactoring and optimizing code',
        'Calibrated, configured, and tested 100+ modules assigned through JIRA tickets, achieving a 50% faster completion rate compared to historical expectations by optimizing workflows',
      ],
    },
    {
      title: 'Deployment Technician, Co-op',
      institution: 'Microserve',
      duration: 'January 2021 - August 2021',
      link: 'https://www.microserve.ca/',
      descriptions: ['Set up 500+ electronics for clients, achieving a 97% client satisfaction score (CSAT) by ensuring all devices were configured accurately and met specifications',
        'Operated with a different 3 to 8 person team every week, enhancing teamwork and guiding new employees, and successfully completed 100% of projects on schedule',
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
      descriptions: ['Designed a Python application that used 100+ SCPI commands to calculate pathloss in fixtures across 2.4 GHz and 5 GHz frequencies, increasing test efficiency by 500+% with data analytics and visualization techniques', 
        'Improved user experience and decreased start time by 50% by writing a YAML configuration file and Windows Batch Script file'],
      duration: 'November 2023 - April 2024',
      link: '',
      skills: ['Python', 'Github', 'YAML', 'Batch Script', 'SCPI', 'RsCmwGprfMeas'],
    },
    {
      title: 'KickPro',
      descriptions: ['Developed a dynamic ball-launcher on a Raspberry Pi, applying real-time image processing algorithms to track human targets and adjust launch speed using OpenCV and I2C',
        'Designed and iterated on the prototype frame using AutoCAD and created a custom integrated circuit board (IC), using Git for version control and documenting the process with a Required Specifications Document.',
        'Gave users data analytics and insights, providing shooting accuracy and ball placement in visual format (shot data over image of a net) with a Tkinter GUI'
      ],
      duration: 'January 2023 - August 2024',
      link: 'https://github.com/minhphat97/Capstone/tree/Henry',
      skills: ['Python', 'Github', 'OpenCV', 'Bash Script', 'I2C', 'Tkinter'],
    },
    {
      title: 'Yet Another Storage Engine',
      descriptions: ['Implemented a relational database engine using optimized concurrent C++ code for indexing, locking, logging, and storage modules, enabling the engine to process over 300 transactions per second',
        'Achieved synchronization of data-intensive transactions with a 0% rate of deadlocking, implementing stress testing and monitoring alongside threads, processes, and hierarchical locking rules with a wait-die policy'
      ],
      duration: 'September 2022 - December 2022',
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