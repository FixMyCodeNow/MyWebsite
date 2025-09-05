import React from 'react';
import "./Footer.css";
import {FaLinkedin, FaInstagram, FaGithub} from "react-icons/fa";

const Footer = () => {
    //Smooth Scroll Function
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if(section){
            section.scrollIntoView({behavior: "smooth"});
        }
    };

  return (
    <footer className="footer">
        <div className="footer-container">
            {/** Name Logo */}
            <h2 className="footer-logo">Satriyo</h2>

            {/** Navigations Link */}        
            <nav className="footer-nav">
                {[
                    {name: "About", id: "about"},
                    {name: "Skills", id: "skills"},
                    {name: "Projects", id: "projects"},
                    {name: "Education", id: "education"},
                ].map((item, index) => (
                    <button key={index} onClick={() => handleScroll(item.id)} className="footer-link">
                            {item.name}
                    </button>
                ))}
            </nav>


            {/** Social Media Icons */}
            <div className="footer-social">
                {[
                    {icon: <FaLinkedin />, link: "https://www.linkedin.com/in/satriyo-akbar-maulana-b23894220/"},
                    {icon: <FaInstagram />, link: "https://www.instagram.com/gootentage_/"},
                    {icon: <FaGithub />, link: "https://github.com/FixMyCodeNow"},
                ].map((item,index) =>  (
                    <a href={item.link} key={index} target="_blank" rel="noopener noreferrer" className="footer-icon">
                        {item.icon}
                    </a>
                ))}
            </div>

            {/** Copyright */}
            <p className="footer-copy">
                © 2025 Satriyo Akbar Maulana. All rights reserved.
            </p>
        </div>
    </footer>
  );
};

export default Footer
