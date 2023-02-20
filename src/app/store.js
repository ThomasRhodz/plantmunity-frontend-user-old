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
  //import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
  import storage from './storage';
  
// RTK Query
import { forumApi } from './services/forumApi';
import { messageApi } from './services/messageApi';
import { associateApi } from './services/associateApi';
import { accountApi } from './services/accountApi';
import { authApi } from './services/authApi';
import { postApi } from './services/postApi';
import { shopApi } from './services/shopApi';

//Redux
import authReducer from './persist/authentication/authSlice';
import userReducer from './persist/account/userSlice';
import shopReducer from './persist/account/shopSlice';
import { reportApi } from './services/reportApi';


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    shop: shopReducer,
    [messageApi.reducerPath]: messageApi.reducer,
    [forumApi.reducerPath]: forumApi.reducer,
    [associateApi.reducerPath]: associateApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [reportApi.reducerPath]: reportApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
  });

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    //stateReconciler: autoMergeLevel2,
    blacklist: [forumApi.reducerPath, reportApi.reducerPath,associateApi.reducerPath, messageApi.reducerPath, accountApi.reducerPath, authApi.reducerPath, postApi.reducerPath, shopApi.reducerPath],
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(forumApi.middleware , reportApi.middleware , postApi.middleware, messageApi.middleware, associateApi.middleware, accountApi.middleware, authApi.middleware, shopApi.middleware),
  });
  
  setupListeners(store.dispatch);