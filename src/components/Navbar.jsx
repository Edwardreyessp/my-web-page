import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AnchorOutlinedIcon from '@mui/icons-material/AnchorOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useMyTheme } from '../hooks/Palette';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { US, MX } from 'country-flag-icons/react/3x2';

const Navbar = () => {
  const { myTheme, myFont } = useMyTheme();
  const [j, i18n] = useTranslation('global');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [darkTheme, setDarkTheme] = useState(false);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const changeLanguage = languaje => {
    i18n.changeLanguage(languaje);
    handleClose();
  };

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
          <Box display='flex' gap='10px' alignItems='center'>
            <IconButton onClick={handleClick}>
              <LanguageOutlinedIcon
                sx={{ fontSize: myFont.icon, color: 'primary.contrastText' }}
              />
            </IconButton>
            <IconButton onClick={handleTheme}>
              {darkTheme ? (
                <DarkModeOutlinedIcon
                  sx={{ fontSize: myFont.icon, color: 'primary.contrastText' }}
                />
              ) : (
                <LightModeOutlinedIcon
                  sx={{ fontSize: myFont.icon, color: 'primary.contrastText' }}
                />
              )}
            </IconButton>
            <IconButton>
              <MenuRoundedIcon
                sx={{
                  fontSize: myFont.icon,
                  color: 'primary.contrastText',
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => changeLanguage('en')}>
          <Box width={22} height={22} mr='10px'>
            <US title='United States' />
          </Box>
          English
        </MenuItem>
        <MenuItem onClick={() => changeLanguage('es')}>
          <Box width={22} height={22} mr='10px'>
            <MX title='United States' />
          </Box>
          Español
        </MenuItem>
      </Menu>
    </ThemeProvider>
  );
};

export default Navbar;
