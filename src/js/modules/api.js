const axios = {
  baseURL: 'https://ch1fa83ktl.execute-api.us-east-2.amazonaws.com/dev',
  Authorization: '',

  get(endPoint) {
    return fetch(`${this.baseURL}${endPoint}`, {
      headers: {
        Authorization: this.Authorization,
      },
    })
      .then(res => res.json())
      .then(data => {
        return { data };
      });
  },
  post(endPoint, data) {
    return fetch(`${this.baseURL}${endPoint}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.Authorization,
      },
    })
      .then(res => res.json())
      .then(data => {
        return { data };
      });
  },
  put(endPoint, data) {
    return fetch(`${this.baseURL}${endPoint}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: this.Authorization,
      },
    })
      .then(res => res.json())
      .then(data => {
        return { data };
      });
  },
};

import { getAccessToken, logout, saveAccessToken } from './tokens';

const setAuthHeader = token => {
  axios.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.Authorization = '';
};

export async function getMolecules() {
  const endPoint = '/molecules';
  const res = await axios.get(endPoint);
  return res.data;
}
export async function getMoleculesByName(name) {
  const endPoint = `/molecules/${name}`;
  const res = await axios.get(endPoint);
  return res.data;
}

export async function updateMolecule({ name, ...data }) {
  const token = getAccessToken();
  setAuthHeader(token);
  const endPoint = `/molecules/${name}`;
  try {
    const res = await axios.put(endPoint, data);
    return res.data;
  } catch {
    console.log('ERROR');
    return {};
  }
}

export async function logIn(credentials) {
  try {
    const endPoint = '/auth/login';
    const res = await axios.post(endPoint, credentials);
    setAuthHeader(res.data.data.accessToken);
    saveAccessToken(res.data.data.accessToken);
    return res.data;
  } catch (err) {
    console.log(err);
    throw new Error('Error Auth!');
  }
}

export async function userLogOut() {
  setAuthHeader('');
  clearAuthHeader();
  logout();
  document.body.querySelector('.js-logout').remove();
}
