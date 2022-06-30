import axios from 'axios';
import { DOMAIN, TOKEN, TOKEN_CYBER } from '../utils/config';

export class BaseService {
  get = (url) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: 'GET',
      headers: {
        token: `Bearer ${localStorage.getItem(TOKEN)}`,
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
        token: `Bearer ${localStorage.getItem(TOKEN)}`,
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
        token: `Bearer ${localStorage.getItem(TOKEN)}`,
        tokenByClass: TOKEN_CYBER,
      },
    });
  };
  delete = (url) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: 'DELETE',
      headers: {
        token: `Bearer ${localStorage.getItem(TOKEN)}`,
        tokenByClass: TOKEN_CYBER,
      },
    });
  };
}
