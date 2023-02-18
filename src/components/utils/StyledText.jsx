import { useTranslation } from 'react-i18next';
import { useMyTheme } from '../../hooks/Palette';
import { Typography, useMediaQuery, useTheme } from '@mui/material';

export const StyledText = ({ value, type = 'h3', color, mb, text }) => {
  const mobile = useMediaQuery(useTheme().breakpoints.down('sm'));
  const { myFont } = useMyTheme();
  const [t] = useTranslation('global');

  const getType = () => {
    if (type === 'h1') return myFont.title;
    if (type === 'h2') return myFont.subtitle;
    if (type === 'h3') return myFont.body;
  };

  const getWeight = () => {
    if (type === 'h1') return 'bold';
    if (type === 'h2') return 'bold';
    if (type === 'h3') return 'normal';
  };

  return (
    <Typography
      color={color}
      textAlign={mobile && 'center'}
      sx={{
        fontSize: getType(),
        fontWeight: getWeight(),
        mb: mb || '0px',
      }}
    >
      {value ? t(value) : text}
    </Typography>
  );
};
