import React, { useEffect, useState } from 'react'

type ICode = string | undefined | null;

const CLIENT_ID = process.env.REACT_APP_ACCESS_KEY;
const AUTORIZE_URL = 'https://unsplash.com/oauth/authorize';
const REDIRECT_URL = 'http://localhost:3000';

const loginURL = `${AUTORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=
${REDIRECT_URL}&scope=public+read_user+read_photos&response_type=code`


export default function Authorization() {

    const [token, setToken] = useState<ICode>('');

    const logOut = () => {
        setToken('')
        window.localStorage.removeItem('code')
    }

    useEffect(() => {
        const href: string = window.location.href
        let code: ICode = window.localStorage.getItem('code')

        if (!code && href) {
            code = href.split('?').find((elem) => elem.startsWith('code'))?.split('=')[1]

            window.location.href = ''
            window.localStorage.setItem('code', code!)
        }
        setToken(code)
    }, [])

    return (
        <>
            {!token ?
                <a className="login__btn" href={loginURL}>
                    Login
                </a>
                :
                <button className="logout__btn" onClick={logOut}>
                    Logout
                </button>
            }
        </>
    )
}
