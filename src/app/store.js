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
import { userApi } from './services/userAPi';
import { authApi } from './services/authApi';
import { postApi } from './services/postApi';
import { shopApi } from './services/shopApi';

//Redux
import authReducer from './persist/authentication/authSlice';
import userReducer from './persist/account/userSlice';


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
  });

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    //stateReconciler: autoMergeLevel2,
    blacklist: [userApi.reducerPath, authApi.reducerPath, postApi.reducerPath, shopApi.reducerPath],
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(postApi.middleware, userApi.middleware, authApi.middleware, shopApi.middleware),
  });
  
  setupListeners(store.dispatch);