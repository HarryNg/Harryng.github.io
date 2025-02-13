import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material';
import { useState, useMemo } from 'react';
import { getDesignTokens } from './theme/theme';
import { Box } from '@mui/material';
import './App.css';
import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';
import WelcomeSection from './components/WelcomeSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

function App() {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;