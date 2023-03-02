import React from 'react';
import './App.css';
import WelcomeSection from './components/WelcomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import TopMenu from './components/TopMenu';
import ContactSection from './components/ContactSection';
import PortfolioSection from './components/PortfolioSection';
import InternshipSection from './components/InternshipSection';



function App() {
  return (
    <div className="App">
      <TopMenu />
      <WelcomeSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <InternshipSection />
      <ContactSection />
    </div>
  );
}

export default App;