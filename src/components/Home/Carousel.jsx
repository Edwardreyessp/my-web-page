import { useState } from 'react';
import { StyledIcon } from '../utils/StyledIcon';
import { StyledText } from '../utils/StyledText';
import { useMyTheme } from '../../hooks/Palette';
import { StyledButton } from '../utils/StyledButton';
import Apperro from '../../assets/images/apperro.svg';
import Apperro2 from '../../assets/images/apperro2.svg';
import { useSpringCarousel } from 'react-spring-carousel';
import { Box, Card, CardActionArea, CardContent } from '@mui/material';

const Carousel = ({ mobile }) => {
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
  const { myTheme } = useMyTheme();

  const {
    carouselFragment,
    slideToPrevItem, // go back to previous slide
    slideToNextItem, // move to next slide
    useListenToCustomEvent, //custom hook to listen event when the slide changes
  } = useSpringCarousel({
    itemsPerSlide: 3, // number of slides per view
    withLoop: true, // will loop
    initialStartingPosition: 'center', // the active slide will be at the center
    gutter: mobile ? 5 : 24, // to add the space between slides
    startEndGutter: mobile ? 0 : 80, // to add the space between slides
    items: mockItems.map(item => {
      return {
        ...item,
        renderItem: (
          <Card
            sx={{
              width: '100%',
              minWidth: '92px',
              aspectRatio: mobile ? '0.4' : '2',
              display: 'grid',
              placeItems: 'center',
              zIndex: currentSlide === item.id && 10,
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
            <CarouselItem
              item={item}
              currentSlide={currentSlide}
              mobile={mobile}
            />
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
    <Box p={mobile ? '20px' : '90px'} bgcolor='background.paper'>
      <StyledText
        type='h2'
        value={'home.projects.title'}
        color='text.primary'
      />
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        py={mobile ? '20%' : '6%'}
      >
        <StyledIcon icon='prev' onClick={slideToPrevItem} />
        <Box width={'100%'} sx={{ overflowX: 'clip' }}>
          {carouselFragment}
        </Box>
        <StyledIcon icon='next' onClick={slideToNextItem} />
      </Box>
      <Box width='100%' display='flex' justifyContent='center'>
        <StyledButton value='home.projects.button' />
      </Box>
    </Box>
  );
};

const CarouselItem = ({ item, currentSlide, mobile }) => {
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
        background: `url(${getImage()}) center/contain no-repeat ${
          mobile ? 'content-box' : 'content-box'
        }`,
        opacity: isCurrentSlide ? 1 : 0.5,
        p: '6%',
      }}
    >
      <CardContent>
        <StyledText text={item.title} type='h4' weight='bold' />
        <StyledText
          type='h5'
          color={'text.secondary'}
          value={`home.projects.${item.id}.description`}
        />
      </CardContent>
    </CardActionArea>
  );
};

export default Carousel;
