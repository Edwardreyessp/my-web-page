import { useContext } from 'react';
import { createContext } from 'react';
import { createTheme } from '@mui/material/styles';

const themeContext = createContext();

export const useTheme = () => {
  const context = useContext(themeContext);
  if (!context) throw new Error('There is not theme provider');
  return context;
};

export const MyThemeProvider = ({ children }) => {
  const theme = createTheme({
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

  return (
    <themeContext.Provider value={{ theme }}>{children}</themeContext.Provider>
  );
};
