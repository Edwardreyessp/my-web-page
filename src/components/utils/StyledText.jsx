import { useTranslation } from 'react-i18next';
import { useMyTheme } from '../../hooks/Palette';
import { Typography } from '@mui/material';

const StyledText = ({ variant, value, color, align, weight, text }) => {
  const { myFont } = useMyTheme();
  const [t] = useTranslation('global');

  return (
    <Typography
      color={color || 'text.primary'}
      textAlign={align || (myFont.buttonSize !== 'large' && 'center')}
      variant={variant}
      sx={{ fontWeight: weight }}
    >
      {value ? t(value) : text}
    </Typography>
  );
};

export default StyledText;
