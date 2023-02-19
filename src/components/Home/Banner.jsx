import persona from '../../assets/persona.png';
import { StyledIcon } from '../utils/StyledIcon';
import { useMyTheme } from '../../hooks/Palette';
import { StyledText } from '../utils/StyledText';
import { StyledButton } from '../utils/StyledButton';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Grid, Stack, useMediaQuery, useTheme } from '@mui/material';

const Banner = () => {
  const defaultTheme = useTheme();
  const { myTheme, darkTheme } = useMyTheme();
  const mobile = useMediaQuery(defaultTheme.breakpoints.down('sm'));

  return (
    <Box
      height='100vh'
      maxHeight='calc(100vh - 108px)'
      p='108px 30px 0 30px'
      sx={{ background: myTheme.palette.background.default }}
    >
      <Grid container height='100%'>
        <Grid
          item
          xs={1}
          container
          justifyContent='flex-end'
          direction='column'
        >
          <BannerSocial myTheme={myTheme} mobile={mobile} />
        </Grid>
        <Grid
          item
          xs={10}
          container
          direction={{ xs: 'column', sm: 'row-reverse' }}
        >
          <Grid
            item
            xs={1}
            sm={6}
            container
            alignItems='flex-end'
            justifyContent='center'
          >
            <img
              src={persona}
              alt={'Me'}
              loading='lazy'
              style={{
                width: '800px',
                maxWidth: '100%',
                marginBottom: mobile && '14px',
                filter: darkTheme ? 'grayscale(100%)' : 'hue-rotate(0deg)',
              }}
            />
          </Grid>
          <Grid item xs={1} sm={6} container alignItems='center'>
            <BannerDescription mobile={mobile} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const BannerSocial = ({ myTheme, mobile }) => {
  return (
    <Stack spacing={2} mb='30px'>
      <Box>
        <FontAwesomeIcon
          icon={faGithub}
          fontSize={mobile ? '20px' : '30px'}
          color={myTheme.palette.primary.contrastText}
          cursor='pointer'
        />
      </Box>
      <StyledIcon icon='email' color='primary.contrastText' />
    </Stack>
  );
};

const BannerDescription = ({ mobile }) => {
  return (
    <Stack justifyContent={mobile && 'center'}>
      <StyledText value='header.title' type='h1' color='primary.contrastText' />
      <StyledText
        value='header.subtitle'
        type='h3'
        color='secondary'
        mb='40px'
      />
      <StyledText
        value='header.body'
        type='h4'
        color='primary.contrastText'
        mb='20px'
      />
      <BannerButtons mobile={mobile} />
    </Stack>
  );
};

const BannerButtons = ({ mobile }) => {
  return (
    <Box display='flex' justifyContent={mobile && 'space-around'} gap='20px'>
      <StyledButton value='header.button-contact' color='secondary' />
      <StyledButton
        value='header.button-projects'
        variant='outlined'
        color='secondary'
      />
    </Box>
  );
};

export default Banner;
