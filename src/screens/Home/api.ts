/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

type HeroData = {
  path: string;
  name: string;
};

export const useHeroDataQuery = () => useQuery(
  ['hero'],
  () => axios<HeroData[]>({
    method: 'get',
    url: 'https://deepwaterstaticcontent.blob.core.windows.net/static/hero.json',
  }),
);
