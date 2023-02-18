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
  const defaultTheme = useTheme();
  const desktop = useMediaQuery(defaultTheme.breakpoints.up('md'));
  const tablet = useMediaQuery(defaultTheme.breakpoints.up('sm'));
  const mobile = useMediaQuery(defaultTheme.breakpoints.up('xs'));
  const [darkTheme, setDarkTheme] = useState(false);

  const getButtonSize = () => {
    if (desktop) return 'large';
    if (tablet) return 'medium';
    if (mobile) return 'small';
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
            default: '#1b2831',
            default2: '#192229',
            paper:
              'linear-gradient(to right, #0a1f2e, #0d2e42, #0f3d58, #0e4d6e, #085e85)',
          },
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
            default: '#fff',
            paper:
              'linear-gradient(to right, #113b58, #144d71, #155f8a, #1473a4, #0c87bf)',
          },
        },
      });
    }
  };

  const myTheme = getCurrentTheme();

  const myFont = {
    title: { lg: 48, xs: 24 },
    subtitle: { lg: 20, xs: 14 },
    body: { lg: 16, xs: 12 },
    icon: { lg: 30, xs: 20 },
    logo: { lg: 48, xs: 30 },
    button: getButtonSize(),
  };

  return (
    <themeContext.Provider value={{ myTheme, myFont, setDarkTheme, darkTheme }}>
      {children}
    </themeContext.Provider>
  );
};
