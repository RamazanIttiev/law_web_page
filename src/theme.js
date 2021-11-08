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
    fontFamily: '"Playfair Display"',
    fontSize: 14,
    h1: {
      fontSize: 32,
      fontFamily: '"Noto Sans Georgian"',
      '@media (max-width:600px)': {
        fontSize: 21,
      },
      fontWeight: 700,
      lineHeight: 1.54,
      color: '#345a80',
      textAlign: 'center',
    },
    h2: {
      fontSize: 20,
      '@media (max-width:600px)': {
        fontSize: 16,
      },
      fontWeight: 500,
      lineHeight: 1.54,
      textAlign: 'center',
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
    MuiGrid: {
      styleOverrides: {
        root: {
          direction: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'baseline',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: '16px 0',
        },
      },
    },
  },
});
