import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#61dafb', // React blue 
      light: '#82e2fc',
      dark: '#4dabcb',
      contrastText: '#fff'
    },
    secondary: {
      main: '#503fe6', 
      light: '#7b6eeb',
      dark: '#3c2eb0',
      contrastText: '#fff'// Purple 
    },
    background: {
      default: mode === 'light' ? '#f5f5f5' : '#0a1929', // Light gray in light mode
      paper: mode === 'light' ? '#ffffff' : '#132f4c',
      navbar: '#ff607e', // New color for navbar background
    },
    text: {
      primary: mode === 'light' ? '#1a1a1a' : '#ffffff',
      secondary: mode === 'light' ? '#ff0000' : '#d4d4d4', // From greeting class
      navbar: '#ffcddf', // New color for navbar text
      logo: '#ba68c8', // Light purple for logo
    },
    custom: {
      highlight: '#61dafb', // For highlighted text
      orange: 'rgb(233, 84, 19)', // fade-in animation
      brown: 'rgb(145,99,57)', //  p-icon class
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevents uppercase transformation
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ff607e', // Pink navbar background
          color: '#ffcddf', // Light pink text
          '& .MuiTypography-root': { // For the logo/title
            color: '#ba68c8', // Light purple
          },
          '& .MuiButton-root': { // For navbar buttons/links
            color: '#ffcddf',
            '&:hover': {
              color: '#ffffff',
            },
          },
        },
      },
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', 
    fontStyle: 'normal',
    
    allVariants: {
      fontStyle: 'normal'
    },
  },
});

// Create a theme using the design tokens
export const createCustomTheme = (mode) => createTheme(getDesignTokens(mode)); 