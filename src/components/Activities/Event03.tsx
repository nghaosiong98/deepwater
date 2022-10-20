import React from 'react';
import Activities from '.';
import { useGetEvent03StaticDataQuery } from '../../screens/Home/api';

const Event03 = () => {
  const { data: eventData } = useGetEvent03StaticDataQuery();
  if (!eventData?.data) {
    return null;
  }
  return (
    <Activities data={eventData?.data} />
  );
};

export default Event03;
