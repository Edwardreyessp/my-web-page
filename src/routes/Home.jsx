import {
  Box,
  Grid,
  Stack,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import persona from '../assets/persona.png';
import { useMyTheme } from '../hooks/Palette';
import { StyledText } from '../components/utils/StyledText';
import { StyledIcon } from '../components/utils/StyledIcon';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { StyledButton } from '../components/utils/StyledButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const { myTheme } = useMyTheme();

  return (
    <ThemeProvider theme={myTheme}>
      <MainPage />
      <Box p={'90px'}>
        <Box className='main-projects'>
          <StyledText type='h2' value={'home.title1'}></StyledText>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const MainPage = () => {
  const { myTheme } = useMyTheme();
  const defaultTheme = useTheme();
  const mobile = useMediaQuery(defaultTheme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        height: '100vh',
        maxHeight: 'calc(100vh - 108px)',
        p: '108px 30px 0 30px',
        background:
          'linear-gradient(to right, #113b58, #144d71, #155f8a, #1473a4, #0c87bf)',
      }}
    >
      <Grid container height='100%'>
        <Grid
          item
          xs={1}
          container
          justifyContent='flex-end'
          direction='column'
        >
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
              }}
            />
          </Grid>
          <Grid item xs={1} sm={6} container alignItems='center'>
            <Stack justifyContent={mobile && 'center'}>
              <StyledText
                value='header.title'
                type='h1'
                color='primary.contrastText'
              />
              <StyledText
                value='header.subtitle'
                type='h2'
                color='secondary'
                mb='40px'
              />
              <StyledText
                value='header.body'
                type='h3'
                color='primary.contrastText'
                mb='20px'
              />
              <Box
                display='flex'
                justifyContent={mobile && 'space-around'}
                gap={'20px'}
              >
                <StyledButton value='header.button-contact' color='secondary' />
                <StyledButton
                  value='header.button-projects'
                  variant='outlined'
                  color='secondary'
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
