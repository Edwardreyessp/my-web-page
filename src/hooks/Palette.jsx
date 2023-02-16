import { useContext } from 'react';
import { createContext } from 'react';
import { createTheme, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

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

  const getButtonSize = () => {
    if (desktop) return 'large';
    if (tablet) return 'medium';
    if (mobile) return 'small';
  };

  const myTheme = createTheme({
    palette: {
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
    },
  });

  const myFont = {
    title: { lg: 48, xs: 24 },
    subtitle: { lg: 20, xs: 14 },
    body: { lg: 16, xs: 12 },
    icon: { lg: 30, xs: 20 },
    logo: { lg: 48, xs: 30 },
    button: getButtonSize(),
  };

  return (
    <themeContext.Provider value={{ myTheme, myFont }}>
      {children}
    </themeContext.Provider>
  );
};
