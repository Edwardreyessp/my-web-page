import { Button } from '@mui/material';
import { useMyTheme } from '../../hooks/Palette';

export const PrimaryButton = ({ value, onClick = () => {} }) => {
  const { myFont } = useMyTheme();

  return (
    <Button
      onClick={onClick}
      variant='contained'
      color='primary'
      size={myFont.button}
    >
      {value}
    </Button>
  );
};

export const SecondaryButton = ({ value, onClick = () => {} }) => {
  const { myFont } = useMyTheme();

  return (
    <Button
      onClick={onClick}
      variant='contained'
      color='secondary'
      size={myFont.button}
    >
      {value}
    </Button>
  );
};
