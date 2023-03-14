import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IPostObj {
    client_id: string,
    client_secret: string,
    redirect_uri: string,
    code: string,
    grant_type: string
}

export const unsplashToken = createApi({
    reducerPath: 'unsplash/token',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://unsplash.com'
    }),
    endpoints: build => ({
        getToken: build.mutation<any, any>({
            query: (postObj: IPostObj) => ({
                url: '/oauth/token',
                method: 'POST',
                params: postObj
            })
        })
    })
})
export const { useGetTokenMutation } = unsplashToken;
