import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter'
import userReducer from './user'
import postReducer from './post'
import forumReducer from './forum'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from '../services/userApi'
import { postApi } from '../services/postApi'
import { forumApi } from '../services/forumApi'
import { concernApi } from '../services/concernApi';

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        user: userReducer,
        post: postReducer,
        forum: forumReducer,
        [userApi.reducerPath]: userApi.reducer,
        [postApi.reducerPath]: postApi.reducer,
        [forumApi.reducerPath]: forumApi.reducer,
        [concernApi.reducerPath]: concernApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(forumApi.middleware),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(concernApi.middleware),
});

setupListeners(store.dispatch);