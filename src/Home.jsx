import { Box, Button, Stack, ThemeProvider, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import persona from './assets/persona.png';
import { useTheme } from './hooks/Palette';

const Home = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <MainPage />
        <Box p={'90px'}>
          <Box className='main-projects'>
            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
              Mis proyectos más destacados
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

const MainPage = () => {
  const { theme } = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        height: 'calc(100vh - 108px)',
        pt: '108px',
        px: '30px',
        background:
          'linear-gradient(to right, #113b58, #144d71, #155f8a, #1473a4, #0c87bf)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
          flexDirection: 'column',
          gap: '20px',
          pb: '30px',
        }}
      >
        <FontAwesomeIcon
          icon={faGithub}
          size='2x'
          color={theme.palette.primary.contrastText}
        />
        <EmailOutlinedIcon
          sx={{ fontSize: '30px', color: 'primary.contrastText' }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
        }}
      >
        <Stack sx={{ justifyContent: 'center' }}>
          <Typography
            variant='h3'
            color='primary.contrastText'
            sx={{ fontWeight: 'bold' }}
          >
            Hola, Soy Edward Reyes!
          </Typography>
          <Typography color='secondary' sx={{ fontWeight: 'bold', mb: '40px' }}>
            Desarrollador web y aplicaciones móviles
          </Typography>
          <Typography
            color='primary.contrastText'
            sx={{ maxWidth: '540px', mb: '20px' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            cursus non dolor vel hendrerit. Curabitur sit amet dolor placerat,
            porta odio ut, sollicitudin ligula. Maecenas erat nisi, dapibus
            bibendum orci sit amet, sodales ornare enim. Etiam pellentesque
            lobortis nulla, vitae malesuada lectus porta et.
          </Typography>
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <Button variant='contained' color='secondary'>
              Contáctame
            </Button>
            <Button variant='outlined' color='secondary'>
              Mis proyectos
            </Button>
          </Box>
        </Stack>
        <Box sx={{ display: 'flex', alignItems: 'end' }}>
          <img
            src={persona}
            alt={'Me'}
            loading='lazy'
            style={{ width: '800px', maxWidth: '100%', alignItems: 'end' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
