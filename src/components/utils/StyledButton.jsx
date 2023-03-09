import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMyTheme } from '../../hooks/Palette';

const StyledButton = ({ value, onClick, color, variant }) => {
  const [t] = useTranslation('global');
  const { myFont } = useMyTheme();

  return (
    <Button
      onClick={onClick}
      variant={variant || 'contained'}
      color={color || 'primary'}
      size={myFont.buttonSize}
    >
      {t(value)}
    </Button>
  );
};

export default StyledButton;
