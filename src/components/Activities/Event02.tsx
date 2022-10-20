import React from 'react';
import Activities from '.';
import { useGetEvent02StaticDataQuery } from '../../screens/Home/api';

const Event02 = () => {
  const { data: eventData } = useGetEvent02StaticDataQuery();
  if (!eventData?.data) {
    return null;
  }
  return (
    <Activities data={eventData?.data} />
  );
};

export default Event02;
