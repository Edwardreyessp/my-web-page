import Navbar from './components/Navbar';
import { Box, Button, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import persona from './assets/persona.png';

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          height: 'calc(100vh - 108px)',
          pt: '108px',
          px: '30px',
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
          <FontAwesomeIcon icon={faGithub} size='2x' />
          <EmailOutlinedIcon sx={{ fontSize: '30px' }} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '100%',
          }}
        >
          <Stack sx={{ justifyContent: 'center' }}>
            <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
              Hola, Soy Edward Reyes!
            </Typography>
            <Typography
              sx={{ fontWeight: 'bold', color: 'primary.main', mb: '40px' }}
            >
              Desarrollador web y aplicaciones móviles
            </Typography>
            <Typography sx={{ maxWidth: '540px', mb: '20px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              cursus non dolor vel hendrerit. Curabitur sit amet dolor placerat,
              porta odio ut, sollicitudin ligula. Maecenas erat nisi, dapibus
              bibendum orci sit amet, sodales ornare enim. Etiam pellentesque
              lobortis nulla, vitae malesuada lectus porta et.
            </Typography>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <Button variant='contained'>Contáctame</Button>
              <Button variant='outlined'>Mis proyectos</Button>
            </Box>
          </Stack>
          <Box sx={{ display: 'flex', alignItems: 'end' }}>
            <img
              src={persona}
              alt={'Me'}
              loading='lazy'
              style={{ width: '800px', height: '806px', alignItems: 'end' }}
            />
          </Box>
        </Box>
      </Box>
      <Box p={'90px'}>
        <Box className='main-projects'>
          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            Mis proyectos más destacados
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
