/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

const URL = 'https://deepwater.azure-api.net/trash-detection/score';
const API_KEY = process.env.REACT_APP_AZURE_ML_ENDPOINT_KEY_A;

type TrashDetectionResp = {
  image_size: [number, number];
  score: number;
};

export const useTrashDetectionMutation = () => useMutation(
  (formData: FormData) => axios<TrashDetectionResp>({
    method: 'post',
    url: URL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: (`Bearer ${API_KEY}`),
      'Ocp-Apim-Subscription-Key': '5057174b84364143a6bd451be88e4a24',
    },
    data: formData,
  }),
);
