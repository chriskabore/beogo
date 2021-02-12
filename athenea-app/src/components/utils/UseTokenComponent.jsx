import React from 'react';

import {useState} from 'react';

export default function useCustomToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
      sessionStorage.setItem('token', JSON.stringify(userToken));
      setToken(userToken.token);
  };

  const removeToken = () => {
      sessionStorage.removeItem('token');
  };

  return {
      setToken:saveToken,
      deleteToken: removeToken,
      token
  };

};
