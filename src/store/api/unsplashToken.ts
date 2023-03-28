import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IToken } from '../../models/models';

interface IPostObj {
  client_id: string | undefined;
  client_secret: string | undefined;
  redirect_uri: string;
  code: string | undefined;
  grant_type: string;
}

export const unsplashToken = createApi({
  reducerPath: 'unsplash/token',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://unsplash.com',
  }),
  endpoints: (build) => ({
    getToken: build.mutation<IToken, IPostObj>({
      query: (postObj: IPostObj) => ({
        url: '/oauth/token',
        method: 'POST',
        params: postObj,
      }),
    }),
  }),
});
export const { useGetTokenMutation } = unsplashToken;
