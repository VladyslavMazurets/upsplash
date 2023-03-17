import { configureStore } from '@reduxjs/toolkit';

import { unsplashApi } from './api/unsplashApi';
import { unsplashToken } from './api/unsplashToken';
import { codeSlice } from './reducers/codeSlice';
import { tokenSlice } from './reducers/tokenSlice';
import { topicsSlice } from './reducers/topicsSlice';

export const store = configureStore({
    reducer: {
        [unsplashApi.reducerPath]: unsplashApi.reducer,
        [unsplashToken.reducerPath]: unsplashToken.reducer,
        [codeSlice.name]: codeSlice.reducer,
        [tokenSlice.name]: tokenSlice.reducer,
        [topicsSlice.name]: topicsSlice.reducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat([unsplashApi.middleware,
        unsplashToken.middleware])

})

export type RootType = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch