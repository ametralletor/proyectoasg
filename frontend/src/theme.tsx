import { createTheme, type ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#66bb6a',
    },
    secondary: {
      main: '#4db6ac',
    },
    error: {
      main: '#e53935',
    },
    divider: '#e0e0e0',
    success: {
      main: '#00e676',
    },
  },
};

export const theme = createTheme(themeOptions);