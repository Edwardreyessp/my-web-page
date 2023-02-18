import { useMyTheme } from '../hooks/Palette';
import Banner from '../components/Home/Banner';
import { Box, ThemeProvider, useMediaQuery, useTheme } from '@mui/material';
import { StyledText } from '../components/utils/StyledText';
import Carousel from '../components/Home/Carousel';

const Home = () => {
  const { myTheme } = useMyTheme();
  const mobile = useMediaQuery(useTheme().breakpoints.down('sm'));

  return (
    <ThemeProvider theme={myTheme}>
      <Banner />
      <Box p={mobile ? '20px' : '90px'} bgcolor='background.default'>
        <Box className='main-projects'>
          <StyledText type='h2' value={'home.title1'} color='text.primary' />
          <Carousel mobile={mobile} />
          <Box height={'5000px'} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
