import { Box, ThemeProvider } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AnchorOutlinedIcon from '@mui/icons-material/AnchorOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useMyTheme } from '../hooks/Palette';

const Navbar = () => {
  const { myTheme, myFont } = useMyTheme();
  return (
    <ThemeProvider theme={myTheme}>
      <Box sx={{ position: 'fixed', width: '100%' }}>
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', p: '30px' }}
        >
          <AnchorOutlinedIcon
            sx={{
              fontSize: myFont.logo,
              color: 'primary.contrastText',
            }}
          />
          <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <LanguageOutlinedIcon
              sx={{
                fontSize: myFont.icon,
                color: 'primary.contrastText',
              }}
            />
            <DarkModeOutlinedIcon
              sx={{
                fontSize: myFont.icon,
                color: 'primary.contrastText',
              }}
            />
            <MenuRoundedIcon
              sx={{
                fontSize: myFont.icon,
                color: 'primary.contrastText',
              }}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
