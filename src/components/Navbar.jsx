import { Box } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AnchorOutlinedIcon from '@mui/icons-material/AnchorOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const Navbar = () => {
  return (
    <Box sx={{ position: 'fixed', width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: '30px' }}>
        <AnchorOutlinedIcon sx={{ fontSize: '48px' }} />
        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <LanguageOutlinedIcon sx={{ fontSize: '30px' }} />
          <DarkModeOutlinedIcon sx={{ fontSize: '30px' }} />
          <MenuRoundedIcon sx={{ fontSize: '30px' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
