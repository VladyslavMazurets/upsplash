import React, { useEffect, useState } from 'react';

import './App.css';
import { useGetTokenMutation } from './store/api/tokenApi';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

function App() {

  const [getToken, { isLoading, isSuccess }] = useGetTokenMutation();
  const [token, setToken] = useState({});

  const fetchToken = async () => {
    const data = await getToken({ CLIENT_ID, CLIENT_SECRET }).unwrap()
    if (isSuccess) setToken(data)
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
      {console.log(token.access_token)}
    </>
  );
}

export default App;
