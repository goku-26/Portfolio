import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-grid">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m a passionate Full-Stack Developer with a strong foundation in MERN technologies.
            My goal is to craft interactive, efficient, and scalable web applications
            that enhance user experience and performance.
          </p>
          <h3>Technical Skills</h3>
          <div className="skills">
            {[
              "HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js",
              "MongoDB", "C", "C++", "SQL", "Git", "Webflow", "Figma"
            ].map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="about-edu">
          <h3>Education</h3>
          <ul>
            <li><strong>B.Tech in Computer Technology</strong> — Bannari Amman Institute of Technology (2022–2026) <br />CGPA: 7.56</li>
            <li><strong>12th Grade</strong> — Metro Matriculation Higher Secondary School (2021–2022) <br />75.67%</li>
            <li><strong>10th Grade</strong> — Metro Matriculation Higher Secondary School (2019–2020) <br />65%</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
