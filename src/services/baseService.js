import axios from 'axios';
import { DOMAIN, TOKEN, TOKEN_CYBER } from '../utils/config';

export class BaseService {
  get = (url) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: 'GET',
      headers: {
        token: TOKEN,
        tokenByClass: TOKEN_CYBER,
      },
    });
  };
  getById = (url, id) => {
    return axios({
      url: `${DOMAIN}/${url}/${id}`,
      method: 'GET',
      headers: {
        token: TOKEN,
        tokenByClass: TOKEN_CYBER,
      },
    });
  };
  post = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: 'POST',
      data: model,
      headers: {
        token: TOKEN,
        tokenByClass: TOKEN_CYBER,
      },
    });
  };
  postImageJob = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: 'POST',
      data: model,
      headers: {
        'Content-Type': 'multipart/form-data',
        token: TOKEN,
        tokenByClass: TOKEN_CYBER,
      },
    });
  };
  postAvatar = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: 'POST',
      data: model,
      headers: {
        'Content-Type': 'multipart/form-data',
        token: TOKEN,
        tokenByClass: TOKEN_CYBER,
      },
    });
  };
  put = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: 'PUT',
      data: model,
      headers: {
        token: TOKEN,
        tokenByClass: TOKEN_CYBER,
      },
    });
  };
  patch = (url, id) => {
    return axios({
      url: `${DOMAIN}/${url}/${id}`,
      method: 'PATCH',
      headers: {
        token: TOKEN,
        tokenByClass: TOKEN_CYBER,
      },
    });
  };
  delete = (url, id) => {
    return axios({
      url: `${DOMAIN}/${url}/${id}`,
      method: 'DELETE',
      headers: {
        token: TOKEN,
        tokenByClass: TOKEN_CYBER,
      },
    });
  };
}
