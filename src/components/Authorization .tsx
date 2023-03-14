import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { ICode } from '../models/models';
import { useGetTokenMutation } from '../store/api/unsplashToken';
import { codeSliceAction } from '../store/reducers/codeSlice';
import { RootDispatch, RootType } from '../store/store';

const CLIENT_ID = process.env.REACT_APP_ACCESS_KEY;
const CLIENT_SEACRET = process.env.REACT_APP_SECRET_KEY;
const AUTORIZE_URL = 'https://unsplash.com/oauth/authorize';
const REDIRECT_URL = 'http://localhost:3000';

const loginURL = `${AUTORIZE_URL}?client_id=${CLIENT_ID}&redirect_uri=
${REDIRECT_URL}&scope=public+read_user+read_photos&response_type=code`


export default function Authorization() {

    const dispatch = useDispatch<RootDispatch>();
    const code = useSelector((state: RootType) => state.code)
    const [getToken] = useGetTokenMutation()

    const logOut = () => {
        dispatch(codeSliceAction.saveCode(''))
        window.localStorage.removeItem('code')
    }

    useEffect(() => {
        const href: string = window.location.href
        let code: ICode = window.localStorage.getItem('code')

        if (code)
            dispatch(codeSliceAction.saveCode(code))
        else
            if (!code && href) {
                code = href.split('?').find((elem) => elem.startsWith('code'))?.split('=')[1]

                window.location.href = ''
                code && window.localStorage.setItem('code', code)
            }

            getToken({
                'client_id': CLIENT_ID,
                'client_secret': CLIENT_SEACRET,
                'redirect_uri': REDIRECT_URL,
                'code': code,
                'grant_type': 'authorization_code'
            }).then(data => console.log(data))

    }, [dispatch])

    return (
        <>
            {!code ?
                <a className="login__btn" href={loginURL}>
                    Login
                </a>
                :
                <button className="logout__btn" onClick={logOut}>
                    Logout
                </button>
            }
            {console.log('CODE', code)}
        </>
    )
}
