import { useTranslation } from 'react-i18next';
import { useMyTheme } from '../../hooks/Palette';
import { Typography, useMediaQuery, useTheme } from '@mui/material';

export const StyledText = ({ value, type = 'h3', color, mb, text, weight }) => {
  const mobile = useMediaQuery(useTheme().breakpoints.down('sm'));
  const { myFont } = useMyTheme();
  const [t] = useTranslation('global');

  const getType = () => {
    if (type === 'h1') return myFont.title;
    if (type === 'h2') return myFont.subtitle;
    if (type === 'h3') return myFont.subtitle2;
    if (type === 'h4') return myFont.body;
    if (type === 'h5') return myFont.body2;
  };

  const getWeight = () => {
    if (weight) return weight;
    if (type === 'h1') return 'bold';
    if (type === 'h2') return 'bold';
    if (type === 'h3') return 'bold';
    if (type === 'h4') return 'normal';
    if (type === 'h5') return 'normal';
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
