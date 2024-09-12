import React from "react";
import "./Body.css"

function Experience() {
  const educationItems = [
    { /* TODO: Image source link then display? */
      /* TODO: Date of graduation in top right like in resume? */
      title: 'B.A.Sc. Computer Engineering',
      institution: 'Simon Fraser University',
      link: 'https://www.sfu.ca/',
      description: 'Graduated in May 2024.'
    },
  ];

  const experienceItems = [
    {
      title: 'Manufacturing Test Engineer, Co-op',
      institution: 'Semtech (Sierra Wireless)',
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
      link: 'https://www.microserve.ca/',
      descriptions: ['Set up 500+ electronics for clients, achieving a 97% client satisfaction score (CSAT) by ensuring all devices were configured accurately and met specifications',
        'Operated with a different 3 to 8 person team every week, enhancing teamwork and guiding new employees, and successfully completed 100% of projects on schedule',
      ],
    },    
  ];


  const projectItems = [
    {
      title: 'Pathloss Testing',
      descriptions: ['Designed a Python application that used 100+ SCPI commands to calculate pathloss in fixtures across 2.4 GHz and 5 GHz frequencies, increasing test efficiency by 500+% with data analytics and visualization techniques', 
        'Improved user experience and decreased start time by 50% by writing a YAML configuration file and Windows Batch Script file'],
      link: '',
      skills: ['Python', 'Github', 'YAML', 'Batch Script', 'SCPI', 'RsCmwGprfMeas'],
    },
    {
      title: 'KickPro',
      descriptions: ['Created a dynamic ball-launcher that sought human targets - capable of analyzing 8-11MB of video data per minute in real-time, adjusting launch speed, and swiveling - on a Raspberry Pi by implementing an OpenCV human-tracking algorithm with I2C',
        'Assembled a modern prototype frame and aesthetic by iterating through frame designs in AutoCAD, designing a custom integrated circuit board (IC), and writing a Required Specifications Document',
        'Gave users data analytics and insights, providing shooting accuracy and ball placement in visual format (shot data over image of a net) with a Tkinter GUI'
      ],
      link: 'https://github.com/minhphat97/Capstone/tree/Henry',
      skills: ['Python', 'Github', 'OpenCV', 'Bash Script', 'I2C', 'Tkinter'],
    },
    {
      title: 'Yet Another Storage Engine',
      descriptions: ['Produced a Relational Database Engine able to process 300+ transactions per second by writing concurrent C++ code for modules in indexing, locking, logging, and storage',
        'Achieved synchronization of data-intensive transactions, with a 0% rate of deadlocking, by utilizing threads, processes, and hierarchical locking rules with a wait-die policy'
      ],
      link: '',
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
            <p>{item.description}</p>
          </a>
        ))}
      </div>

      <h2>Experience</h2>
      <div className="resume-section">
        {experienceItems.map((item, index) => (
          <a href={item.link} key={index} className="resume-box" target="_blank" rel="noopener noreferrer">
            <h3>{item.title}</h3>
            <p>{item.institution}</p>
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
            <p>Testing 4444!!!!</p>
            <Experience />
        </section>
    );
}