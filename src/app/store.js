import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

  import storage from './storage';

//redux persists
import userReducer from './persists/user'
import postReducer from './persists/post'
import forumReducer from './persists/forum'

//RTK Query
import { userApi } from './services/userApi'
import { postApi } from './services/postApi'
import { forumApi } from './services/forumApi'
import { concernApi } from './services/concernApi';


const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    forum: forumReducer,
    [userApi.reducerPath]: userApi.reducer, 
    [postApi.reducerPath]: postApi.reducer,
    [forumApi.reducerPath]: forumApi.reducer,
    [concernApi.reducerPath]: concernApi.reducer,
  });

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    //stateReconciler: autoMergeLevel2,
    blacklist: [userApi.reducerPath, postApi.reducerPath, forumApi.reducerPath, concernApi.reducerPath],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              },
        }).concat(userApi.middleware, postApi.middleware, forumApi.middleware, concernApi.middleware),
});

setupListeners(store.dispatch);