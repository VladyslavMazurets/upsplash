import React, { useEffect, useState } from 'react';

import './App.css';
import { IToken } from './models/models';
import { useGetTokenMutation } from './store/api/tokenApi';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:3000/'

function App() {

  const [getToken, { isSuccess, isLoading }] = useGetTokenMutation();
  const [token, setToken] = useState({});

  const fetchToken = async () => {
    const data = await getToken({ CLIENT_ID, CLIENT_SECRET })
      .unwrap()
      setToken(data)
  }

  useEffect(() => {
    fetchToken();
  }, [])

  // fetch('https://api.igdb.com/v4/age_ratings', {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Client-ID': CLIENT_ID,
  //     `Authorization: Bearer ${}`,
  //   }
  // })

  return (
    <>
      {isLoading && <h1>...Loading</h1>}
      {isSuccess && console.log(token)}
    </>
  );
}

export default App;
