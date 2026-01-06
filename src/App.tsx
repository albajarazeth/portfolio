import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfessionalSummary from './components/ProfessionalSummary';
import FrontendStack from './components/FrontendStack';
import BackendStack from './components/BackendStack';
import OtherTechnologies from './components/OtherTechnologies';
import WorkExperience from './components/WorkExperience';
import FreelanceWork from './components/FreelanceWork';
import PersonalProjects from './components/PersonalProjects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <main>
        <Hero />
        <ProfessionalSummary />
        <FrontendStack />
        <BackendStack />
        <OtherTechnologies />
        <WorkExperience />
        <FreelanceWork />
        <PersonalProjects />
        <AboutMe />
        <Contact />
      </main>
    </div>
  );
}

export default App;
