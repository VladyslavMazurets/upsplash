import { configureStore } from '@reduxjs/toolkit';

import { unsplashApi } from './api/unsplashApi';
import { unsplashToken } from './api/unsplashToken';
import { codeSlice } from './reducers/codeSlice';

export const store = configureStore({
    reducer: {
        [unsplashApi.reducerPath]: unsplashApi.reducer,
        [unsplashToken.reducerPath]: unsplashToken.reducer,
        [codeSlice.name]: codeSlice.reducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(unsplashApi.middleware)

})

export type RootType = ReturnType<typeof store.getState>

export type RootDispatch = typeof store.dispatch