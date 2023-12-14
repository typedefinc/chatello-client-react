import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/modules/auth/store/authSlice.ts";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseApi } from "@/shared/api";
import notificationSlice from "@/modules/notifications/store/notificationSlice.ts";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    notification: notificationSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch: () => AppDispatch = useDispatch;

setupListeners(store.dispatch);
