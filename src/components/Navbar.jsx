import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import { useMyTheme } from '../hooks/Palette';
import { useTranslation } from 'react-i18next';
import { StyledIcon } from './utils/StyledIcon';
import { StyledText } from './utils/StyledText';
import { US, MX } from 'country-flag-icons/react/3x2';

const Navbar = () => {
  const { myTheme, setDarkTheme, darkTheme } = useMyTheme();
  const [j, i18n] = useTranslation('global');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [navbarSyle, setNavbarSyle] = useState({
    position: 'fixed',
    width: '100%',
    zIndex: 1,
  });
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

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

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      setNavbarSyle({
        ...navbarSyle,
        background: myTheme.palette.background.default,
        boxShadow: '5px 0px 27px -5px rgba(0, 0, 0, 0.3)',
      });
    } else {
      setNavbarSyle({
        ...navbarSyle,
        background: 'transparent',
        boxShadow: 'none',
      });
    }
  });

  return (
    <ThemeProvider theme={myTheme}>
      <Box sx={navbarSyle}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            p: '20px 30px',
          }}
        >
          <StyledIcon icon='logo' color='primary.contrastText' />
          <Box display='flex' gap='10px' alignItems='center'>
            <StyledIcon
              icon='language'
              color='primary.contrastText'
              onClick={handleClick}
            />
            <StyledIcon
              icon={darkTheme ? 'dark' : 'light'}
              onClick={handleTheme}
              color='primary.contrastText'
            />
            <StyledIcon
              icon='menu'
              color='primary.contrastText'
              onClick={toggleDrawer(true)}
            />
            <Drawer
              anchor='right'
              open={openDrawer}
              onClose={toggleDrawer(false)}
            >
              <ListDrawer toggleDrawer={toggleDrawer} />
            </Drawer>
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

const ListDrawer = ({ toggleDrawer }) => {
  const { myTheme } = useMyTheme();
  const menuItems = [
    { text: 'navbar.home', icon: 'home' },
    { text: 'navbar.projects', icon: 'work' },
    { text: 'navbar.contact', icon: 'contact' },
    { text: 'navbar.about', icon: 'about' },
  ];

  return (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        p={1}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <StyledIcon icon='logo' color='primary.main' />
        <StyledIcon icon='close' />
      </Box>
      <List>
        <Divider />
        {menuItems.map((item, index) => (
          <Box key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StyledIcon icon={item.icon} />
                </ListItemIcon>
                <StyledText value={item.text} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default Navbar;
