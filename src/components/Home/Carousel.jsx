import { useState } from 'react';
import StyledIcon from '../utils/StyledIcon';
import StyledText from '../utils/StyledText';
import StyledButton from '../utils/StyledButton';
import { useMyTheme } from '../../hooks/Palette';
import Apperro from '../../assets/images/apperro.svg';
import Apperro2 from '../../assets/images/apperro2.svg';
import { useSpringCarousel } from 'react-spring-carousel';
import { Box, Card, CardActionArea, CardContent, Stack } from '@mui/material';

const Carousel = () => {
  const mockItems = [
    { id: 'apperro', title: 'Apperro', image: Apperro, image2: Apperro2 },
    {
      id: 'project2',
      title: 'Project2',
      image: Apperro,
      image2: Apperro2,
    },
    {
      id: 'project3',
      title: 'Project3',
      image: Apperro,
      image2: Apperro2,
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(mockItems[0].id);
  const { myTheme, myFont } = useMyTheme();

  const {
    carouselFragment,
    slideToPrevItem, // go back to previous slide
    slideToNextItem, // move to next slide
    useListenToCustomEvent, //custom hook to listen event when the slide changes
  } = useSpringCarousel({
    itemsPerSlide: 3, // number of slides per view
    withLoop: true, // will loop
    initialStartingPosition: 'center', // the active slide will be at the center
    gutter: myFont.buttonSize === 'small' ? 5 : 24, // to add the space between slides
    startEndGutter: myFont.buttonSize === 'small' ? 0 : 80, // to add the space between slides
    items: mockItems.map(item => {
      return {
        ...item,
        renderItem: (
          <Card
            sx={{
              aspectRatio: { xs: 2, md: '2' },
              zIndex: currentSlide === item.id && 1,
              transition: 'all 0.7s',
              transform: currentSlide === item.id && 'scale(1.5)',
              background:
                currentSlide === item.id
                  ? myTheme.palette.mode === 'dark'
                    ? myTheme.palette.secondary.dark
                    : myTheme.palette.secondary.main
                  : myTheme.palette.primary.main,
            }}
          >
            <CarouselItem item={item} currentSlide={currentSlide} />
          </Card>
        ),
      };
    }),
  });

  useListenToCustomEvent(event => {
    if (event.eventName === 'onSlideStartChange') {
      setCurrentSlide(event?.nextItem?.id);
    }
  });

  return (
    <Stack
      justifyContent='center'
      alignItems='center'
      py='4%'
      width='100%'
      bgcolor='background.paper'
    >
      <Stack width='95%' spacing={9}>
        <StyledText variant='h2' value={'home.projects.title'} />
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <StyledIcon icon='prev' onClick={slideToPrevItem} />
          <Box sx={{ overflowX: 'clip' }}>{carouselFragment}</Box>
          <StyledIcon icon='next' onClick={slideToNextItem} />
        </Box>
        <Stack alignItems='center'>
          <StyledButton value='home.projects.button' />
        </Stack>
      </Stack>
    </Stack>
  );
};

const CarouselItem = ({ item, currentSlide }) => {
  const isCurrentSlide = currentSlide === item.id;

  const getImage = () => {
    if (isCurrentSlide) return item.image;
    return item.image2;
  };

  return (
    <CardActionArea
      sx={{
        width: '100%',
        height: '100%',
        background: `url(${getImage()}) center/contain no-repeat content-box`,
        opacity: isCurrentSlide ? 1 : 0.5,
        p: '6%',
      }}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        <StyledText text={item.title} variant='body2' weight='bold' />
        <StyledText
          variant='caption'
          color='text.secondary'
          value={`home.projects.${item.id}.description`}
        />
      </CardContent>
    </CardActionArea>
  );
};

export default Carousel;
