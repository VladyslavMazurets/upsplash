import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IToken, TokenObject } from '../../models/models';

interface IClient {
    CLIENT_ID: string | undefined,
    CLIENT_SECRET: string | undefined
}

export const tokenApi = createApi({
    reducerPath: 'token/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://id.twitch.tv/oauth2/token'
    }),
    endpoints: build => ({
        getToken: build.mutation<string, IClient>({
            query: (client: IClient) => {
                const { CLIENT_ID, CLIENT_SECRET } = client;
                return {
                    url: `?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`,
                    method: 'POST',
                    transformResponse: (response: TokenObject<IToken>) => response.data.access_token
                }
            }
        })
    })
})

export const { useGetTokenMutation } = tokenApi;