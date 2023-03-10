import React, { useEffect, useState } from 'react';

import './App.css';
import { useGetTokenMutation } from './store/api/tokenApi';

type ICode = string | undefined | null;

const CLIENT_ID = process.env.REACT_APP_ACCESS_KEY;
const CLIENT_SECRET = process.env.REACT_APP_SECRET_KEY;
const AUTORIZE_URL = 'https://unsplash.com/oauth/authorize';
const REDIRECT_URL = 'http://localhost:3000';

const loginURL = `${AUTORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=
${REDIRECT_URL}&scope=public+read_user+read_photos&response_type=code`

function App() {

  const [code, setCode] = useState<ICode>('');

  useEffect(() => {
    const href: string = window.location.href
    let code: ICode = window.localStorage.getItem('code')

    if (!code && href) {
      code = href.substring(1).split('?').find((elem) => elem.startsWith('code'))?.split('=')[1]

      window.location.href = ''
      window.localStorage.setItem('code', code)
    }
    setCode(code)
  }, [])

  return (
    <>
      {/* {console.log('STATE =',code)} */}
      <a href={loginURL}>Click</a>
    </>
  );
}

export default App;
