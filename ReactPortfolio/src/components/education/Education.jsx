import React from "react";
import { education } from "../../constants";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      {/* Title */}
      <div className="education-title">
        <h2>Education</h2>
        <div className="title-underline"></div>
        <p>
          My Education Has Been a journey of learning and development toward
          technology. Here are the details of my education background.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="education-grid">
        {education.map((edu) => (
          <div key={edu.id} className="education-card">
            <div className="card-header">
              <div className="logo-container">
                <img src={edu.img} alt={edu.school} />
              </div>
              <div className="school-info">
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>
                <p className="date">{edu.date}</p>
              </div>
            </div>
            <p className="grade">Grade: {edu.grade}</p>
            <p className="desc">{edu.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
