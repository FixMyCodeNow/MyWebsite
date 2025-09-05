
import './App.css'
import Navbar from './components/navbar/navbar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Project from './components/project/Project';
import BlurBlob from './components/BlurBlob';

function App() {
  return (
  <div className="app-container">
  <BlurBlob
    position={{ top: '35%', left: '20%' }}
    size={{ width: '30%', height: '40%' }}
  />

  <div className="grid-overlay"></div>

  <div className="content-wrapper">
    <Navbar />
    <About />
    <Skills />
    <Project />
    <Education />
    <Contact />
    <Footer />
  </div>
</div>
  );
}


export default App
