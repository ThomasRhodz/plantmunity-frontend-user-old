import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'
import userReducer from './user'
import postReducer from './post'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from '../services/userApi'
import { postApi } from '../services/postApi'

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        user: userReducer,
        post: postReducer,
        [userApi.reducerPath]: userApi.reducer,
        [postApi.reducerPath]: postApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
});

setupListeners(store.dispatch);