import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ITopics } from '../../models/models';

interface IOptions {
  url: string;
  token: string;
}

export const unsplashApi = createApi({
  reducerPath: 'unsplash/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com/',
  }),
  endpoints: (build) => ({
    getApiData: build.query<ITopics[], IOptions>({
      query: (options: IOptions) => {
        const { url, token } = options;
        return {
          url,
          headers: {
            'Accept-Version': 'v1',
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const { useGetApiDataQuery } = unsplashApi;
