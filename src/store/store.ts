import { configureStore } from '@reduxjs/toolkit';

import { tokenApi } from './api/tokenApi';

export const store = configureStore({
    reducer: {
        [tokenApi.reducerPath]: tokenApi.reducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(tokenApi.middleware)
})

export type RootType = ReturnType<typeof store.getState>