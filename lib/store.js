import { configureStore } from '@reduxjs/toolkit';
import { directusApi } from './api/directusApi';

export const store = configureStore({
  reducer: {
    [directusApi.reducerPath]: directusApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(directusApi.middleware),
});
