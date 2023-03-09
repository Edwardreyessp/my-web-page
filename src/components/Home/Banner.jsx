import persona from '../../assets/persona.png';
import { StyledIcon } from '../utils/StyledIcon';
import { useMyTheme } from '../../hooks/Palette';
import { StyledText } from '../utils/StyledText';
import { StyledButton } from '../utils/StyledButton';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Stack } from '@mui/material';

const Banner = () => {
  const { myTheme } = useMyTheme();

  return (
    <Stack
      alignItems='center'
      width='100vw'
      maxWidth='100%'
      pt='108px'
      sx={{ background: myTheme.palette.background.default }}
    >
      <Box
        display='flex'
        alignItems='flex-end'
        maxWidth={{ xs: '90%', md: '95%' }}
        pb={{ xs: '30px', md: '0' }}
        gap={{ xs: 2, md: 0 }}
      >
        <Stack spacing={{ xs: 2, md: 4 }} mb={{ xs: 0, md: 4 }}>
          <BannerIcons />
        </Stack>
        <Box
          display='flex'
          flexDirection={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'space-around', md: 'center' }}
          justifyContent={{ xs: 'center', md: 'space-around' }}
        >
          <Stack spacing={4} maxWidth={{ xs: '90%', md: '40%' }}>
            <BannerDescription />
          </Stack>
          <Box width={{ xs: '90%', md: '40%' }}>
            <BannerImage />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

const BannerIcons = () => {
  const { myTheme, myFont } = useMyTheme();

  return (
    <>
      <FontAwesomeIcon
        icon={faGithub}
        fontSize={myFont.button === 'small' ? '20px' : '30px'}
        color={myTheme.palette.primary.contrastText}
        cursor='pointer'
      />
      <StyledIcon icon='email' color='primary.contrastText' />
    </>
  );
};

const BannerDescription = () => {
  return (
    <>
      <Stack>
        <StyledText
          value='home.banner.title'
          type='h1'
          color='primary.contrastText'
        />
        <StyledText value='home.banner.subtitle' type='h3' color='secondary' />
      </Stack>
      <StyledText
        value='home.banner.body'
        type='h4'
        color='primary.contrastText'
      />
      <Box
        display='flex'
        gap={4}
        justifyContent={{ xs: 'center', md: 'flex-start' }}
      >
        <StyledButton value='home.banner.button-contact' color='secondary' />
        <StyledButton
          value='home.banner.button-projects'
          variant='outlined'
          color='secondary'
        />
      </Box>
    </>
  );
};

const BannerImage = () => {
  const { darkTheme } = useMyTheme();

  return (
    <img
      src={persona}
      alt={'Me'}
      loading='lazy'
      style={{
        width: '100%',
        filter: darkTheme ? 'grayscale(100%)' : 'hue-rotate(0deg)',
      }}
    />
  );
};

export default Banner;
