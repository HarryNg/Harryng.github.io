import React from 'react';
import './App.css';
import TopNavbar from './components/TopNavbar';
import WelcomeSection from './components/WelcomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <main>
        <WelcomeSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;