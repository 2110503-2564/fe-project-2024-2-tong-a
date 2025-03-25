import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { bookSlice } from "./features/bookSlice"; // Assuming this is your slice
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { WebStorage } from "redux-persist/lib/types";

// Create a custom storage solution that works in both server and client
function createPersistStorage(): WebStorage {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }
  return createWebStorage('local'); // Fallback to 'localStorage' on the client
}

const storage = createPersistStorage();

// Persist config with storage definition
const persistConfig = {
  key: "rootPersist",
  storage,
};

const rootReducer = combineReducers({
  bookSlice: bookSlice.reducer, // Ensure the bookSlice reducer is correctly passed here
});

// Wrap the rootReducer with persistReducer
const reduxPersistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: reduxPersistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hook for useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
