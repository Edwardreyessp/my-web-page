import { useMyTheme } from '../hooks/Palette';
import Banner from '../components/Home/Banner';
import { Box, ThemeProvider } from '@mui/material';
import { StyledText } from '../components/utils/StyledText';

const Home = () => {
  const { myTheme } = useMyTheme();

  return (
    <ThemeProvider theme={myTheme}>
      <Banner />
      <Box p={'90px'} bgcolor='background.default'>
        <Box className='main-projects'>
          <StyledText
            type='h2'
            value={'home.title1'}
            color='text.primary'
          ></StyledText>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
