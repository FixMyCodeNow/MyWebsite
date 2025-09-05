import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        {/* Logo */}
        <div className="logo">
          <span>Satriyo AM</span>
        </div>

        {/* Menu + Socials dibungkus */}
        <div className="menu-container">
          <ul className="menu">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`menu-item ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="socials">
            <a
              href="https://github.com/FixMyCodeNow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/satriyo-akbar-maulana-b23894220"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle">
          {isOpen ? (
            <FiX onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`mobile-item ${
                  activeSection === item.id ? "active" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="mobile-socials">
              <a
                href="https://github.com/FixMyCodeNow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/satriyo-akbar-maulana-b23894220"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
