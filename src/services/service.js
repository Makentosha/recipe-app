import axios from 'axios';

import {apiConfig} from '../config/api';

const CancelToken = axios.CancelToken;
let cancelPrevRequest;

export const getRecipes = (payload) => {
  cancelPrevRequest && cancelPrevRequest('cancel');

  const params = {key: apiConfig.keys[0], q: payload};

  return axios.get(
    'search',
    {
      params,
      cancelToken: new CancelToken((c) => { cancelPrevRequest = c; })
    }
  );
};

export const getRecipeDetails = (payload) => {
  cancelPrevRequest && cancelPrevRequest('cancel');

  const params = {key: apiConfig.keys[0], rId: payload};

  return axios.get(
    'get',
    {
      params,
      cancelToken: new CancelToken((c) => { cancelPrevRequest = c; })
    }
  );
};
