import {
  Box,
  Button,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import persona from './assets/persona.png';
import { useMyTheme } from './hooks/Palette';

const Home = () => {
  const { myTheme } = useMyTheme();

  return (
    <ThemeProvider theme={myTheme}>
      <MainPage />
      <Box p={'90px'}>
        <Box className='main-projects'>
          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            Mis proyectos más destacados
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const MainPage = () => {
  const { myTheme, myFont } = useMyTheme();
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
              />
            </Box>
            <EmailOutlinedIcon
              sx={{
                fontSize: myFont.icon,
                color: 'primary.contrastText',
              }}
            />
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
              <Typography
                color='primary.contrastText'
                textAlign={mobile && 'center'}
                sx={{
                  fontSize: myFont.title,
                  fontWeight: 'bold',
                }}
              >
                ¡Hola, Soy Edward Reyes!
              </Typography>
              <Typography
                color='secondary'
                textAlign={mobile && 'center'}
                sx={{
                  fontSize: myFont.subtitle,
                  fontWeight: 'bold',
                  mb: '40px',
                }}
              >
                Desarrollador web y aplicaciones móviles
              </Typography>
              <Typography
                color='primary.contrastText'
                textAlign={mobile && 'center'}
                sx={{ fontSize: myFont.body, mb: '20px' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas cursus non dolor vel hendrerit. Curabitur sit amet
                dolor placerat, porta odio ut, sollicitudin ligula. Maecenas
                erat nisi, dapibus bibendum orci sit amet, sodales ornare enim.
                Etiam pellentesque lobortis nulla, vitae malesuada lectus porta
                et.
              </Typography>
              <Box
                display='flex'
                justifyContent={mobile && 'space-around'}
                gap={'20px'}
              >
                <Button
                  variant='contained'
                  color='secondary'
                  size={myFont.button}
                >
                  Contáctame
                </Button>
                <Button
                  variant='outlined'
                  color='secondary'
                  size={myFont.button}
                >
                  Mis proyectos
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
