import { useMyTheme } from '../hooks/Palette';
import Banner from '../components/Home/Banner';
import Carousel from '../components/Home/Carousel';
import { ThemeProvider, useMediaQuery, useTheme } from '@mui/material';

const Home = () => {
  const { myTheme } = useMyTheme();
  const mobile = useMediaQuery(useTheme().breakpoints.down('sm'));

  return (
    <ThemeProvider theme={myTheme}>
      <Banner />
      <Carousel mobile={mobile} />
    </ThemeProvider>
  );
};

export default Home;
