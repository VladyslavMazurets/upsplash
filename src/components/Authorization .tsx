import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ICode } from '../models/models';
import { useGetTokenMutation } from '../store/api/unsplashToken';
import { codeSliceAction } from '../store/reducers/codeSlice';
import { tokenSliceAction } from '../store/reducers/tokenSlice';
import { RootDispatch, RootType } from '../store/store';

const CLIENT_ID = 'UQZCNsUKPoOkiCEIV2kuZm42ttdwyrVJnQkwPcmLdxM';
const CLIENT_SEACRET = 'EwysqYK-nHfIbi-MEoOvJRheLXb0zh9eQpH72zPaudE';
const AUTORIZE_URL = 'https://unsplash.com/oauth/authorize';
const REDIRECT_URL = 'https://upsplash.vercel.app'; // http://localhost:3000

const loginURL = `${AUTORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=
${REDIRECT_URL}&scope=public+read_user+read_photos&response_type=code`;

export default function Authorization() {
  const dispatch = useDispatch<RootDispatch>();
  const code = useSelector((state: RootType) => state.code);
  const [getToken] = useGetTokenMutation();

  const getUnsplashToken = async () => {
    const data = await getToken({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SEACRET,
      redirect_uri: REDIRECT_URL,
      code: code,
      grant_type: 'authorization_code',
    }).unwrap();
    localStorage.setItem('token', data.access_token);
    dispatch(tokenSliceAction.saveToken(data.access_token));
  };

  const logOut = () => {
    dispatch(codeSliceAction.saveCode(''));
    localStorage.removeItem('code');
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const href = window.location.href;
    let code: ICode = window.localStorage.getItem('code');

    if (!code && href) {
      code = href
        .split('?')
        .find((e) => e.startsWith('code'))
        ?.split('=')[1];
      code && window.localStorage.setItem('code', code);
    }
    code && dispatch(codeSliceAction.saveCode(code));
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (code && !token) {
      getUnsplashToken();
    }
    dispatch(tokenSliceAction.saveToken(token!));
  }, [code]);

  return (
    <>
      {!code ? (
        <a className="login__btn" href={loginURL}>
          Login
        </a>
      ) : (
        <button className="logout__btn" onClick={logOut}>
          Logout
        </button>
      )}
    </>
  );
}
