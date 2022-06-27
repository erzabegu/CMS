import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setAutoFreeze } from 'immer';
import { useDispatch } from "react-redux";
import { contentSlice } from "./slice/FileContent";

setAutoFreeze(false);

const store = configureStore({
    reducer: {
        content: contentSlice
    },
    devTools: { name: "Reader" },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;