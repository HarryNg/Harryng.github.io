export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#61dafb', // React blue from your CSS
      light: '#82e2fc',
      dark: '#4dabcb',
      contrastText: '#fff'
    },
    secondary: {
      main: '#503fe6', // Purple from your .present class
      light: '#7b6eeb',
      dark: '#3c2eb0',
      contrastText: '#fff'
    },
    background: {
      default: mode === 'light' ? '#f5f5f5' : '#0a1929', // Light gray in light mode
      paper: mode === 'light' ? '#ffffff' : '#132f4c',
      navbar: '#ff607e', // New color for navbar background
    },
    text: {
      primary: mode === 'light' ? '#1a1a1a' : '#ffffff',
      secondary: mode === 'light' ? '#8b8b8b' : '#d4d4d4', // From your greeting class
      navbar: '#ffcddf', // New color for navbar text
      logo: '#ba68c8', // Light purple for logo
    },
    custom: {
      highlight: '#61dafb', // For highlighted text
      orange: 'rgb(233, 84, 19)', // From your fade-in animation
      brown: 'rgb(145,99,57)', // From your p-icon class
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
}); 