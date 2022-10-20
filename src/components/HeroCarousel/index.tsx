import React, { FC } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Carousel } from 'react-responsive-carousel';
import { useHeroDataQuery } from '../../screens/Home/api';

const HeroSection = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    height: 400,
  },
  [theme.breakpoints.up('md')]: {
    height: 500,
  },
}));

const HeroCarousel: FC = () => {
  const { data: heroData } = useHeroDataQuery();
  if (heroData?.data) {
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
      >
        {heroData.data.map((hero) => (
          <HeroSection key={hero.path}>
            <img src={hero.path} alt={hero.name} style={{ height: '100%', objectFit: 'cover', width: '100%' }} />
          </HeroSection>
        ))}
      </Carousel>
    );
  }

  return null;
};

export default HeroCarousel;
