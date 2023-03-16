import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { ICode } from '../models/models';
import { useGetTokenMutation } from '../store/api/unsplashToken';
import { codeSliceAction } from '../store/reducers/codeSlice';
import { tokenSliceAction } from '../store/reducers/tokenSlice';
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
    const token = useSelector((state:RootType) => state.token)
    const [getToken] = useGetTokenMutation()

    const getUnsplashToken = async () => {
        const data = await getToken({
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SEACRET,
            'redirect_uri': REDIRECT_URL,
            'code': code,
            'grant_type': 'authorization_code'
        }).unwrap()

       dispatch(tokenSliceAction.saveToken(data.access_token))
    }

    const logOut = () => {
        dispatch(codeSliceAction.saveCode(''))
        window.localStorage.removeItem('code')
    }

    useEffect(() => {
        const href = window.location.href
        let code: ICode = window.localStorage.getItem('code')

        if (!code && href) {
            code = href.split('?').find(e => e.startsWith('code'))?.split('=')[1]
            code && window.localStorage.setItem('code', code)
        }
        code && dispatch(codeSliceAction.saveCode(code))
    }, [dispatch])

    useEffect(() => {
        if (code && !token)
           getUnsplashToken();
    }, [code])

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
        </>
    )
}