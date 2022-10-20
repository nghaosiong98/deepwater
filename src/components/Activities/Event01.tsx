import React from 'react';
import Activities from '.';
import { useGetEvent01StaticDataQuery } from '../../screens/Home/api';

const Event01 = () => {
  const { data: event01Data } = useGetEvent01StaticDataQuery();
  if (!event01Data?.data) {
    return null;
  }
  return (
    <Activities data={event01Data?.data} />
  );
};

export default Event01;
