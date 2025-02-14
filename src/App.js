import React from 'react';
import { Box } from '@mui/material';
import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';
import WelcomeSection from './components/WelcomeSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
      <Box sx={{ 
        bgcolor: 'background.default',
        minHeight: '100vh',
        color: 'text.primary'
      }}>
        <TopNavbar />
        <main>
          <WelcomeSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </Box>
  );
}

export default App;