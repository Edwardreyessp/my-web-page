import { ThemeProvider } from '@mui/material';
import { useMyTheme } from '../hooks/Palette';
import Banner from '../components/Home/Banner';
import Carousel from '../components/Home/Carousel';
import Technology from '../components/Home/Technology';

const Home = () => {
  const { myTheme } = useMyTheme();

  return (
    <ThemeProvider theme={myTheme}>
      <Banner />
      <Carousel />
      <Technology />
    </ThemeProvider>
  );
};

export default Home;
