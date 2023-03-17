import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { ITopics, ITopicsRoot } from '../../models/models';

interface ITopicsToken {
    url: string,
    token: string
}

export const unsplashApi = createApi({
    reducerPath: 'unsplash/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.unsplash.com/'
    }),
    endpoints: build => ({
        getTopics: build.query<ITopicsRoot, ITopicsToken>({
            query: (topics: ITopicsToken) => {
                const { url, token } = topics;
                return {
                    url,
                    headers: {
                        'Accept-Version': 'v1',
                        'Authorization': `Bearer ${token}`
                    }
                }
            }
        }),
    })
})

export const { useGetTopicsQuery } = unsplashApi;