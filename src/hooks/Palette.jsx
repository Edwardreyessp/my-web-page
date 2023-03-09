import { createContext } from 'react';
import { useContext, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { createTheme, useTheme } from '@mui/material/styles';

const themeContext = createContext();

export const useMyTheme = () => {
  const context = useContext(themeContext);
  if (!context) throw new Error('There is not theme provider');
  return context;
};

export const MyThemeProvider = ({ children }) => {
  const desktop = useMediaQuery(useTheme().breakpoints.up('md'));
  const tablet = useMediaQuery(useTheme().breakpoints.up('sm'));
  const mobile = useMediaQuery(useTheme().breakpoints.up('xs'));
  const [darkTheme, setDarkTheme] = useState(false);

  const getButtonSize = () => {
    if (desktop) return 'large';
    if (tablet) return 'medium';
    if (mobile) return 'small';
  };

  const getFontSize = () => {
    if (desktop) {
      return {
        h1: { fontSize: '48px', fontWeight: 700 },
        h2: { fontSize: '36px', fontWeight: 700 },
        h3: { fontSize: '24px', fontWeight: 700 },
        body1: { fontSize: '32px', fontWeight: 400 },
        body2: { fontSize: '20px', fontWeight: 400 },
        caption: { fontSize: '16px', fontWeight: 400 },
      };
    }
    if (tablet) {
      return {
        h1: { fontSize: '32px', fontWeight: 700 },
        h2: { fontSize: '24px', fontWeight: 700 },
        h3: { fontSize: '20px', fontWeight: 700 },
        body1: { fontSize: '20px', fontWeight: 400 },
        body2: { fontSize: '16px', fontWeight: 400 },
        caption: { fontSize: '12px', fontWeight: 400 },
      };
    }
    if (mobile) {
      return {
        h1: { fontSize: '24px', fontWeight: 700 },
        h2: { fontSize: '20px', fontWeight: 700 },
        h3: { fontSize: '16px', fontWeight: 700 },
        body1: { fontSize: '16px', fontWeight: 400 },
        body2: { fontSize: '14px', fontWeight: 400 },
        caption: { fontSize: '10px', fontWeight: 400 },
      };
    }
  };

  const getCurrentTheme = () => {
    if (darkTheme) {
      return createTheme({
        palette: {
          mode: 'dark',
          primary: {
            light: '#4dabf5',
            main: '#1192ee',
            dark: '#0d6bb3',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ffca59',
            main: '#ffca59',
            dark: '#F0BA45',
            contrastText: '#50390a',
          },
          background: {
            default:
              'linear-gradient(to right, #0a1f2e, #0d2e42, #0f3d58, #0e4d6e, #085e85)',
            paper: '#1b2831',
            paper2: '#192229',
            primary: '#0a1f2e',
          },
          text: {
            banner:
              'linear-gradient(to right, #0a1f2e, #0d2e42, #0f3d58, #0e4d6e, #085e85)',
          },
        },
        typography: {
          ...getFontSize(),
        },
      });
    } else {
      return createTheme({
        palette: {
          mode: 'light',
          primary: {
            light: '#4dabf5',
            main: '#1192ee',
            dark: '#0d6bb3',
            contrastText: '#fff',
          },
          secondary: {
            light: '#fffd82',
            main: '#ffca59',
            dark: '#c79b3e',
            contrastText: '#76581c',
          },
          neutral: {
            light: '#f5f5f5',
            main: '#98a3a9',
            dark: '#4d4d4d',
            contrastText: '#fff',
          },
          background: {
            default:
              'linear-gradient(to right, #113b58, #144d71, #155f8a, #1473a4, #0c87bf)',
            paper: '#fff',
            paper2: '#f5f5f5',
          },
        },
        typography: {
          ...getFontSize(),
        },
      });
    }
  };

  const myTheme = getCurrentTheme();

  const myFont = {
    icon: { lg: 30, xs: 20 },
    logo: { lg: 48, xs: 30 },
    buttonSize: getButtonSize(),
  };

  return (
    <themeContext.Provider value={{ myTheme, myFont, setDarkTheme, darkTheme }}>
      {children}
    </themeContext.Provider>
  );
};
