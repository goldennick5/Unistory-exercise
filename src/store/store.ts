import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userAPI } from "../services/UserService";
import userReducer from "./reducers/UserSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;