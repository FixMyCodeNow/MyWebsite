import React from 'react'
import { SkillsInfo } from '../../constants'
import Tilt from "react-parallax-tilt";
import "./Skills.css";

const Skills = () => {
  return (<section id="skills" className="skills-section">
    {/** skills section */}
    <div className="skills-header">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-underline"></div>
        <p className="skills-subtitle">
            Here's some of my skills and expertise honed through various project
        </p>
    </div>

    {/** Skills Categories */}
    <div className="skills-categories">
        {SkillsInfo.map((category) => (
            <div key={category.title} className="skills-card">
                <h3 className="skills-category-title">{category.title}</h3>

                {/** Skills Items */}
                <Tilt 
                key={category.title}
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
                >
                    <div className="skills-grid">
                        {category.skills.map((skill) => (
                            <div key={skill.name} className="skill-item">
                                <img src={skill.logo} 
                                    alt={`${skill.name} logo`}
                                    className="skill-logo"
                                />
                                <span className="skill-name">{skill.name}</span>
                            </div> 
                        ))}
                    </div>
                </Tilt>
            </div>
        ))}
    </div>
  </section>
  )
}


export default Skills
