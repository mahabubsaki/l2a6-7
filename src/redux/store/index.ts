import { configureStore } from '@reduxjs/toolkit';
import demoSlice from '../features/demo/demoSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { baseApi } from '../api/baseAPI';
import authSlice from '../features/auth/authSlice';


const persistConfig = {
    key: 'auth',
    storage,
};

const persistedDemoSlice = persistReducer(persistConfig, demoSlice);
const persistedAuthSlice = persistReducer(persistConfig, authSlice);

export const store = configureStore({
    reducer: {
        demo: persistedDemoSlice,
        [baseApi.reducerPath]: baseApi.reducer,
        auth: persistedAuthSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        }).concat(baseApi.middleware),

});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;