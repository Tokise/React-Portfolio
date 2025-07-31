import React from "react";
import "./AboutSection.css";
import profileImg from "../../assets/profile.jpg";



const skills = ["Java", "PHP", "CSS", "HTML", "C++", "MySQL"];
const education = [
  { year: "2022-2025", title: "BS Information Technology", school: "Bestlink College of the Philippines" },
  { year: "2013-2021", title: "High School Diploma", school: "Amparo High Scool" }
];

const AboutSection = () => (
  <section className="about" id="about">
    <div className="parallax-bg" aria-hidden="true"></div>
    <div className="about-content">
      <div className="about-left">
        <img src={profileImg} alt="Profile" className="about-profile-img large" />
        <div className="stack">
          <h3>Stack I Use</h3>
          <ul className="skills-list">
            {skills.map(skill => (
              <li key={skill} className="skill-tag">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          I am a passionate web developer focused on building beautiful and functional system. Currently 3rd Year BSIT Student at Bestlink College of the Philippines. I love working with modern web technologies and creating delightful user experiences
          and I believe in continuous learning and sharing knowledge with the community.
        </p>
       
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <div className="education-timeline">
            <h3>Education</h3>
            <ul>
              {education.map((edu, i) => (
                <li key={i} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{edu.year}</span>
                    <span className="timeline-title">{edu.title}</span>
                    <span className="timeline-school">{edu.school}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
      
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;