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

function Resume() {
  return (
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
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Resume />} />
      <Route path="/excerpt" element={<Excerpt />} />
    </Routes>
  );
}

export default App;
