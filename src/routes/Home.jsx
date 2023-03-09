import { useMyTheme } from '../hooks/Palette';
import Banner from '../components/Home/Banner';
import Carousel from '../components/Home/Carousel';
import Technology from '../components/Home/Technology';
import {
  Box,
  Divider,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const Home = () => {
  const { myTheme, darkTheme, myFont } = useMyTheme();
  const mobile = useMediaQuery(useTheme().breakpoints.down('sm'));

  return (
    <ThemeProvider theme={myTheme}>
      <Banner />
      {/* <Carousel mobile={mobile} />
      {!darkTheme && <Divider />}
      <Technology mobile={mobile} /> */}
    </ThemeProvider>
  );
};

export default Home;
