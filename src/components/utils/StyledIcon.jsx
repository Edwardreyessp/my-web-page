import {
  faJs,
  faCss3,
  faSass,
  faFigma,
  faHtml5,
  faReact,
  faGitAlt,
  faGithub,
  faAndroid,
} from '@fortawesome/free-brands-svg-icons';
import { useMyTheme } from '../../hooks/Palette';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AnchorOutlinedIcon from '@mui/icons-material/AnchorOutlined';
import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';

export const StyledIcon = ({ icon = 'menu', color, onClick }) => {
  const { myFont, myTheme } = useMyTheme();
  const mobile = useMediaQuery(useTheme().breakpoints.down('sm'));

  const styleIcon = {
    fontSize: icon === 'logo' ? myFont.logo : myFont.icon,
    color: color,
    cursor: 'pointer',
  };

  const getColor = () => {
    if (color === 'primary.contrastText') return myTheme.palette.text.primary;
    return myTheme.palette.text.primary;
  };

  const getAwesomeIcon = icon => {
    return (
      <FontAwesomeIcon
        icon={icon}
        fontSize={mobile ? '20px' : '30px'}
        color={getColor()}
        cursor={onClick && 'pointer'}
      />
    );
  };

  const getIcon = () => {
    if (icon === 'logo') return <AnchorOutlinedIcon sx={styleIcon} />;
    if (icon === 'menu') return <MenuRoundedIcon sx={styleIcon} />;
    if (icon === 'dark') return <DarkModeOutlinedIcon sx={styleIcon} />;
    if (icon === 'light') return <LightModeOutlinedIcon sx={styleIcon} />;
    if (icon === 'language') return <LanguageOutlinedIcon sx={styleIcon} />;
    if (icon === 'email') return <EmailOutlinedIcon sx={styleIcon} />;
    if (icon === 'home') return <HomeRoundedIcon sx={styleIcon} />;
    if (icon === 'work') return <WorkHistoryRoundedIcon sx={styleIcon} />;
    if (icon === 'about') return <ImportContactsRoundedIcon sx={styleIcon} />;
    if (icon === 'contact') return <MailRoundedIcon sx={styleIcon} />;
    if (icon === 'close') return <CloseRoundedIcon sx={styleIcon} />;
    if (icon === 'next') return <NavigateNextRoundedIcon sx={styleIcon} />;
    if (icon === 'prev') return <NavigateBeforeRoundedIcon sx={styleIcon} />;
    if (icon === 'github') return getAwesomeIcon(faGithub);
    if (icon === 'react') return getAwesomeIcon(faReact);
    if (icon === 'figma') return getAwesomeIcon(faFigma);
    if (icon === 'css') return getAwesomeIcon(faCss3);
    if (icon === 'html') return getAwesomeIcon(faHtml5);
    if (icon === 'js') return getAwesomeIcon(faJs);
    if (icon === 'android') return getAwesomeIcon(faAndroid);
    if (icon === 'sass') return getAwesomeIcon(faSass);
    if (icon === 'git') return getAwesomeIcon(faGitAlt);
  };

  if (onClick) {
    return <IconButton onClick={onClick}>{getIcon()}</IconButton>;
  } else {
    return getIcon();
  }
};
