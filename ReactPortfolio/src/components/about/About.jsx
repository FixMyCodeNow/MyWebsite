import React from 'react'
import "./About.css"
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import Profile_logo from "../../assets/Profile_logo/Profile.jpeg"

const About = () => {
  return (
    <section id='about' className="section">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <h1 className="greeting">Hi, I am</h1>
          <h2 className="name">Satriyo Akbar Maulana</h2>
          <h3 className="skills">
            <span className="textWhite">I am a </span>
            <ReactTypingEffect
              text={[
                'Front-End Web Developer',
                'Data Analyst',
                'Coder',
                'Gamer',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#00FFFF]">{cursor}</span>
              )}
            />
          </h3>

          <p className="aboutText">
            I am a university student at Universitas Mercu Buana, majoring in Information Systems. 
            I have hands-on experience in developing frontend web projects and working on data analysis tasks. 
            My academic background has equipped me with a strong foundation in information system,
            while my project experience has helped me build practical skills in web development, problem-solving, 
            and analytical thinking. I am eager to continue learning and applying my knowledge to real-world challenges.
          </p>

          <a 
            href="https://drive.google.com/file/d/1cX8GQPoyaGc7D5Mp0ggYXlhdsTjKZ7u6/view?usp=sharing"
            target='_blank' 
            rel='noopener noreferrer' 
            className="cvButton"
          >
            Download CV
          </a>
        </div>

        {/* Right Side */}
        <div className="right">
          <Tilt
            className="tiltWrapper"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img 
              src={Profile_logo} 
              alt="Satriyo" 
              className="profileImage" 
            />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About
