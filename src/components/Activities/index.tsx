import React, { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Slider from 'react-slick';
import { EventStaticData } from '../../constants';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

interface ActivitiesProps {
  data: EventStaticData;
}

const Activities: FC<ActivitiesProps> = ({
  data,
}) => (
  <Stack spacing={2}>
    <Typography variant="h4">
      {data.title}
    </Typography>
    <Slider {...settings}>
      {data.images.map((image) => (
        <Box>
          <Box sx={{ padding: 1, height: 300 }}>
            <img src={image.path} alt={image.name} style={{ height: '100%', objectFit: 'cover', width: '100%' }} />
          </Box>
        </Box>
      ))}
    </Slider>
  </Stack>
);

export default Activities;
