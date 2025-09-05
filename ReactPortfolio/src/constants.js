// Skills Section Logo's
import htmlLogo from "./assets/Tech_Logo/html.png";
import cssLogo from "./assets/Tech_Logo/css.png";
import tailwindcssLogo from "./assets/Tech_Logo/tailwindcss.png";
import javascriptLogo from "./assets/Tech_Logo/javascript.png";
import reactjsLogo from "./assets/Tech_Logo/react.png";
import vueLogo from "./assets/Tech_Logo/vuejs.png";
import viteLogo from "./assets/Tech_Logo/vite.png";
import excelLogo from "./assets/Tech_Logo/Excel.png";
import pythonLogo from "./assets/Tech_Logo/Python.png";
import colabLogo from "./assets/Tech_Logo/googlecolab.png";
import powerbiLogo from "./assets/Tech_Logo/PowerBI.png";
import lookerLogo from "./assets/Tech_Logo/googlelooker.png";
import spssLogo from "./assets/Tech_Logo/SPSS.png";
import vscodeLogo from "./assets/Tech_Logo/Vscode.png";
import githubLogo from "./assets/Tech_Logo/github.png";

// Education Section Logo's
import umbLogo from "./assets/Education_Logo/Universitas-Mercu-Buana.png";
import sman1Logo from "./assets/Education_Logo/logo-bonlap.jpg";

// Projects Logo's
import caribukuLogo from './assets/Project_Logo/CariBuku.png';
import streamlyLogo from './assets/Project_Logo/Streamly.png';
import ecommerceLogo from './assets/Project_Logo/E-commerce-sales.png';




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Vue JS', logo: vueLogo },
      { name: 'Vite', logo: viteLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Data Analyst',
    skills: [
      { name: 'Excel', logo: excelLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Google Colab', logo: colabLogo },
      { name: 'Power BI', logo: powerbiLogo },
      { name: 'Google Looker Studio', logo: lookerLogo },
      { name: 'SPSS', logo: spssLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: umbLogo,
    school: "Universitas Mercu Buana",
    date: "Ongoing",
    grade: "IPK 3.83 (Last Semester)",
    desc: "Currently pursuing a Bachelor's degree in Information Systems at Universitas Mercu Buana. Built strong foundations in system analysis, database management, and web development, with interests expanding into both software development and data analytics.",
    degree: "Bachelor of Information Systems (In Progress)",
  },
  {
    id: 1,
    img: sman1Logo,
    school: "SMAN 1 Tambun Selatan",
    date: "Graduated",
    grade: "87.66%",
    desc: "Completed high school majoring in Science (IPA) with strong academic performance, achieving an average score of 87.66.",
    degree: "High School Diploma - Science Major",
  },
];

export const tools = [
  {
    name: 'VS Code',
    logo: vscodeLogo,
  },
  {
    name: 'GitHub',
    logo: githubLogo,
  },
];

export const projects = [
  {
    id: 0,
    title: "CariBuku Web Application",
    description:
      "A web application built with React and API integration from Open Library to search and explore books online. Designed with responsive UI and simple search functionality.",
    image: caribukuLogo,
    tags: ["React JS", "API", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/FixMyCodeNow/CariBuku-Web-Application.git",
    webapp: "",
  },
  {
    id: 1,
    title: "Streamly",
    description:
      "A movie streaming application using TMDB API. Provides movie listings, details, and categories with a clean and interactive UI built using React and TailwindCSS.",
    image: streamlyLogo,
    tags: ["React JS", "API", "CSS", "JavaScript"],
    github: "https://github.com/FixMyCodeNow/Streamly.git",
    webapp: "",
  },
  {
    id: 2,
    title: "E-commerce Sales Analysis",
    description:
      "A data analysis project using a Kaggle dataset. The process included data cleaning, processing, and visualization using Power BI, Python, and other data analytics tools.",
    image: ecommerceLogo,
    tags: ["Python", "Power BI", "Excel", "Data Cleaning", "Data Visualization"],
    github: "https://github.com/FixMyCodeNow/powerbi-ecommerce-sales-analysis.git",
    webapp: "",
  },
];
