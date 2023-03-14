import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface ITopics {
    url: string,
    token: string
}

export const unsplashApi = createApi({
    reducerPath: 'unsplash/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.unsplash.com/'
    }),
    endpoints: build => ({
        getTopics: build.query<string, any>({
            query: (topics: ITopics) => {
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