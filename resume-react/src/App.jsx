import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Novel from './components/Novel';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Excerpt from './components/Excerpt';
import U197Designs from './components/U197Designs';
import Aurora from './components/Aurora';

function Resume() {
  return (
    <>
      <div className="aurora-bg">
        <Aurora
          colorStops={["#00d9ff", "#0066cc", "#003366"]}
          amplitude={1.0}
          blend={0.5}
          speed={0.5}
        />
      </div>
      <div className="resume-container">
        <Header />
        <Summary />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Novel />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Resume />} />
      <Route path="/excerpt" element={<Excerpt />} />
      <Route path="/u197designs" element={<U197Designs />} />
    </Routes>
  );
}

export default App;
