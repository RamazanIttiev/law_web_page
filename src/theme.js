import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#345a80',
    },
    secondary: {
      main: '#e3322b',
    },
    type: 'light',
    background: {
      default: '#f6f6f6',
      paper: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#345a80',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Open Sans"',
    fontSize: 14,
    h1: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 1.54,
      color: '#345a80',
      textAlign: 'center',
    },
    h2: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 1.54,
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          width: '70%',
          margin: '0 auto',
          background: 'transparent',
          border: 'none',

          '&.Mui-expanded': {
            margin: '0 auto',
          },
        },
      },
    },
    MuiTypography: {
      root: {
        fontSize: 14,
      },
    },
  },
});
