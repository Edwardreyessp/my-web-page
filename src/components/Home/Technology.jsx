import { Box, Stack, Tooltip } from '@mui/material';
import Css from '../../assets/icons/css.svg';
import Git from '../../assets/icons/git.svg';
import Npm from '../../assets/icons/npm.svg';
import StyledText from '../utils/StyledText';
import Dart from '../../assets/icons/dart.svg';
import Html from '../../assets/icons/html.svg';
import Json from '../../assets/icons/json.svg';
import Sass from '../../assets/icons/sass.svg';
import Yarn from '../../assets/icons/yarn.svg';
import Figma from '../../assets/icons/figma.svg';
import { useMyTheme } from '../../hooks/Palette';
import Github from '../../assets/icons/github.svg';
import Js from '../../assets/icons/javascript.svg';
import Visual from '../../assets/icons/visual.svg';
import Flutter from '../../assets/icons/flutter.svg';
import ReactLogo from '../../assets/icons/react.svg';
import Firebase from '../../assets/icons/firebase.svg';
import GithubDark from '../../assets/icons/githubdarkmode.svg';

const Technology = () => {
  return (
    <Stack width='100%' alignItems='center' py='4%' bgcolor='background.paper2'>
      <Box width='95%'>
        <StyledText value='home.technology' variant='h2' />
        <Box
          display='grid'
          gridTemplateColumns='repeat(5, 1fr)'
          gap={{ xs: '0', md: '10%' }}
          sx={{ my: { xs: '0', md: '4%' }, placeItems: 'center' }}
        >
          <ImageBrand brand='firebase' />
          <ImageBrand brand='css' />
          <ImageBrand brand='git' />
          <ImageBrand brand='github' />
          <ImageBrand brand='html' />
          <ImageBrand brand='js' />
          <ImageBrand brand='react' />
          <ImageBrand brand='sass' />
          <ImageBrand brand='dart' />
          <ImageBrand brand='flutter' />
          <ImageBrand brand='figma' />
          <ImageBrand brand='json' />
          <ImageBrand brand='npm' />
          <ImageBrand brand='yarn' />
          <ImageBrand brand='visual' />
        </Box>
      </Box>
    </Stack>
  );
};

const ImageBrand = ({ brand }) => {
  const { darkTheme } = useMyTheme();

  const getImage = () => {
    if (brand === 'js') return Js;
    if (brand === 'css') return Css;
    if (brand === 'git') return Git;
    if (brand === 'npm') return Npm;
    if (brand === 'dart') return Dart;
    if (brand === 'html') return Html;
    if (brand === 'json') return Json;
    if (brand === 'sass') return Sass;
    if (brand === 'yarn') return Yarn;
    if (brand === 'figma') return Figma;
    if (brand === 'visual') return Visual;
    if (brand === 'flutter') return Flutter;
    if (brand === 'react') return ReactLogo;
    if (brand === 'firebase') return Firebase;
    if (brand === 'github') return darkTheme ? GithubDark : Github;
  };

  return (
    <Tooltip title={brand} placement='top' arrow>
      <Box
        width='50%'
        height='100px'
        sx={{ background: `url(${getImage()}) center/contain no-repeat` }}
      ></Box>
    </Tooltip>
  );
};

export default Technology;
