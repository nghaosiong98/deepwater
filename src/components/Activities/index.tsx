import React, { FC } from 'react';
import {
  Box, Stack, Typography, useMediaQuery,
} from '@mui/material';
import Slider from 'react-slick';
import { EventStaticData } from '../../constants';

interface ActivitiesProps {
  data: EventStaticData;
}

const Activities: FC<ActivitiesProps> = ({
  data,
}) => {
  // @ts-ignore
  const upMd = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: upMd ? 3 : 1,
    slidesToScroll: 1,
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h5" fontWeight="medium">
        {data.title}
      </Typography>
      <Slider {...settings}>
        {data.images.map((image) => (
          <Box key={image.path}>
            <Box sx={{ padding: 1, height: 300 }}>
              <img src={image.path} alt={image.name} style={{ height: '100%', objectFit: 'cover', width: '100%' }} />
            </Box>
          </Box>
        ))}
      </Slider>
    </Stack>
  );
};

export default Activities;
