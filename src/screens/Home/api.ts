/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { EventStaticData, StaticImage } from '../../constants';

export const useHeroDataQuery = () => useQuery(
  ['hero'],
  () => axios<StaticImage[]>({
    method: 'get',
    url: 'https://deepwaterstaticcontent.blob.core.windows.net/static/hero.json',
  }),
);

export const useGetEvent01StaticDataQuery = () => useQuery(
  ['event01'],
  () => axios<EventStaticData>({
    method: 'get',
    url: 'https://deepwaterstaticcontent.blob.core.windows.net/static/event01.json',
  }),
);

export const useGetEvent02StaticDataQuery = () => useQuery(
  ['event02'],
  () => axios<EventStaticData>({
    method: 'get',
    url: 'https://deepwaterstaticcontent.blob.core.windows.net/static/event02.json',
  }),
);

export const useGetEvent03StaticDataQuery = () => useQuery(
  ['event03'],
  () => axios<EventStaticData>({
    method: 'get',
    url: 'https://deepwaterstaticcontent.blob.core.windows.net/static/event03.json',
  }),
);
