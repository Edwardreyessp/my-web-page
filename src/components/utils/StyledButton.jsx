import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMyTheme } from '../../hooks/Palette';

export const StyledButton = ({
  value,
  onClick = () => {},
  color = 'primary',
  variant = 'contained',
}) => {
  const { myFont } = useMyTheme();
  const [t] = useTranslation('global');

  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      size={myFont.button}
    >
      {t(value)}
    </Button>
  );
};
