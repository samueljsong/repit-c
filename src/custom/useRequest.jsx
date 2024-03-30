import { useCookies } from 'react-cookie';

const useRequest = () => {
  const [, , removeCookie] = useCookies(['user']);

  const getConfig = (method, body) => {
    const config = {
      method: method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    };
    return config;
  };

  const logOutRequest = async () => {
    const { success } = await postRequest('auth/logout');
    if (success) {
      removeCookie('session');
      removeCookie('user');
      window.location.href = '/';
    }
  };

  const logInRequest = async (credentials) => {
    try {
      const endpoint = 'auth/login';
      const response = await postRequest(endpoint, credentials);
      if (response.success) {
        return response;
      }
      return response;
    } catch (e) {
      return e.response.message;
    }
  };

  const urlConstructor = (endpoint) => {
    return import.meta.env.VITE_SERVER_URL + endpoint;
  };

  const deleteRequest = async (endpoint, body = undefined) => {
    try {
      const url = urlConstructor(endpoint);
      const response = await fetch(url, getConfig('DELETE', body));
      if (response.status === 200) {
        return true;
      }
      if (response.status === 404) {
        return false;
      }
      if (response.status === 401) {
        window.location.href = '/login';
        return;
      }
      if (response.status === 403) {
        throw e;
      }
      if (response.status === 400) {
        await logOutRequest();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const patchRequest = async (endpoint, body = undefined) => {
    try {
      const url = urlConstructor(endpoint);
      const response = await fetch(url, getConfig('PATCH', body));
      if (response.status === 200) {
        const data = await response.json();
        return data;
      }
      if (response.status === 404) {
        window.location.href = '/404';
        return;
      }
      if (response.status === 401) {
        window.location.href = '/login';
        return;
      }
      if (response.status === 403) {
        throw e;
      }
      if (response.status === 400) {
        await logOutRequest();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getRequest = async (endpoint, body = undefined) => {
    try {
      const url = urlConstructor(endpoint);
      const response = await fetch(url, getConfig('GET', body));
      if (response.status === 200) {
        const data = await response.json();
        return data;
      }
      if (response.status === 404) {
        window.location.href = '/404';
        return;
      }
      if (response.status === 401) {
        window.location.href = '/login';
        return;
      }
      if (response.status === 403) {
        throw e;
      }
      if (response.status === 400) {
        await logOutRequest();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const postRequest = async (endpoint, body = undefined) => {
    try {
      const url = urlConstructor(endpoint);
      const response = await fetch(url, getConfig('POST', body));
      if (response.status === 200) {
        const data = await response.json();
        return data;
      }
      if (response.status === 404) {
        window.location.href = '/404';
        return;
      }
      if (response.status === 401) {
        window.location.href = '/login';
        return;
      }
      if (response.status === 403) {
        throw e;
      }
      if (response.status === 400) {
        await logOutRequest();
        return;
      }
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getRequest,
    postRequest,
    logInRequest,
    logOutRequest,
    patchRequest,
    deleteRequest,
  };
};

export default useRequest;
