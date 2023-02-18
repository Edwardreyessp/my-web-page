import { useState } from 'react';
import { Box } from '@mui/material';
import { StyledIcon } from '../utils/StyledIcon';
import { StyledText } from '../utils/StyledText';
import { useSpringCarousel } from 'react-spring-carousel';

const Carousel = ({ mobile }) => {
  const mockItems = [
    { id: 'item-1', title: 'slide 1' },
    { id: 'item-2', title: 'slide 2' },
    { id: 'item-3', title: 'slide 3' },
  ];
  const [currentSlide, setCurrentSlide] = useState(mockItems[0].id);

  const {
    carouselFragment,
    slideToPrevItem, // go back to previous slide
    slideToNextItem, // move to next slide
    useListenToCustomEvent, //custom hook to listen event when the slide changes
  } = useSpringCarousel({
    itemsPerSlide: 3, // number of slides per view
    withLoop: true, // will loop
    initialStartingPosition: 'center', // the active slide will be at the center
    gutter: mobile ? 10 : 24, // to add the space between slides
    startEndGutter: mobile ? 30 : 80, // to add the space between slides
    items: mockItems.map(item => {
      return {
        ...item,
        renderItem: (
          <Box
            display='grid'
            width='100%'
            zIndex={currentSlide === item.id && 10}
            backgroundColor={
              currentSlide === item.id ? 'secondary.main' : 'primary.main'
            }
            sx={{
              aspectRatio: mobile ? '1' : '2',
              placeItems: 'center',
              transition: 'all 0.7s',
              transform: currentSlide === item.id && 'scale(1.5)',
            }}
          >
            <StyledText text={item.title} type='h3' />
          </Box>
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
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      py={mobile ? '10%' : '6%'}
    >
      <StyledIcon icon='prev' onClick={slideToPrevItem} />
      <Box sx={{ overflowX: 'clip' }}>{carouselFragment}</Box>
      <StyledIcon icon='next' onClick={slideToNextItem} />
    </Box>
  );
};

export default Carousel;
