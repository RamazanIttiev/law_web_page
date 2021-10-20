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
    fontSize: 16,
    h1: {
      fontSize: 56,
      fontWeight: 700,
      lineHeight: 1.54,
    },
    h2: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: 1.54,
    },
  },
});
