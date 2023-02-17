import { IconButton } from '@mui/material';
import { useMyTheme } from '../../hooks/Palette';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AnchorOutlinedIcon from '@mui/icons-material/AnchorOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

export const StyledIcon = ({ icon = 'menu', color, onClick }) => {
  const { myFont } = useMyTheme();
  const styleIcon = {
    fontSize: icon === 'logo' ? myFont.logo : myFont.icon,
    color: color,
  };

  const getIcon = () => {
    if (icon === 'logo') return <AnchorOutlinedIcon sx={styleIcon} />;
    if (icon === 'menu') return <MenuRoundedIcon sx={styleIcon} />;
    if (icon === 'dark') return <DarkModeOutlinedIcon sx={styleIcon} />;
    if (icon === 'light') return <LightModeOutlinedIcon sx={styleIcon} />;
    if (icon === 'language') return <LanguageOutlinedIcon sx={styleIcon} />;
    if (icon === 'email') return <EmailOutlinedIcon sx={styleIcon} />;
  };

  if (onClick) {
    return <IconButton onClick={onClick}>{getIcon()}</IconButton>;
  } else {
    return getIcon();
  }
};
