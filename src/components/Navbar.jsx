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
  Stack,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import StyledIcon from './utils/StyledIcon';
import StyledText from './utils/StyledText';
import { useMyTheme } from '../hooks/Palette';
import { useTranslation } from 'react-i18next';
import { US, MX } from 'country-flag-icons/react/3x2';

const Navbar = () => {
  const { myTheme, setDarkTheme, darkTheme } = useMyTheme();
  const [j, i18n] = useTranslation('global');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [navbarSyle, setNavbarSyle] = useState({
    position: 'fixed',
    width: '100vw',
    maxWidth: '100%',
    zIndex: 2,
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

  const changeLanguage = languaje => {
    i18n.changeLanguage(languaje);
    setAnchorEl(null);
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

  const buttons = [
    { icon: 'language', onClick: e => setAnchorEl(e.currentTarget) },
    {
      icon: darkTheme ? 'dark' : 'light',
      onClick: () => setDarkTheme(!darkTheme),
    },
    { icon: 'menu', onClick: toggleDrawer(true) },
  ];

  return (
    <ThemeProvider theme={myTheme}>
      <Box
        display='flex'
        justifyContent='center'
        sx={navbarSyle}
        py={{ xs: '3%', md: '1%' }}
      >
        <Box
          width={{ xs: '90%', md: '95%' }}
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <StyledIcon icon='logo' color='primary.contrastText' />
          <Box display='flex' alignItems='center'>
            {buttons.map((button, index) => {
              return (
                <StyledIcon
                  key={index}
                  icon={button.icon}
                  color='primary.contrastText'
                  onClick={button.onClick}
                />
              );
            })}
            <Drawer
              anchor='right'
              open={openDrawer}
              onClose={toggleDrawer(false)}
            >
              <ListDrawer toggleDrawer={toggleDrawer} />
            </Drawer>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
              onClick={() => setAnchorEl(null)}
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
                <Box display='flex' alignItems='center' gap={2}>
                  <Stack width={22} height={22} justifyContent='center'>
                    <US title='United States' />
                  </Stack>
                  <StyledText variant='body2' text='English' />
                </Box>
              </MenuItem>
              <MenuItem onClick={() => changeLanguage('es')}>
                <Box display='flex' alignItems='center' gap={2}>
                  <Stack width={22} height={22} justifyContent='center'>
                    <MX title='United States' />
                  </Stack>
                  <StyledText variant='body2' text='Español' />
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const ListDrawer = ({ toggleDrawer }) => {
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
                <StyledText variant='body2' value={item.text} />
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
