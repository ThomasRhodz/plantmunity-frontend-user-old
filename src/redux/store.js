import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'
import userReducer from './user'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from '../services/userApi'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
});

setupListeners(store.dispatch);