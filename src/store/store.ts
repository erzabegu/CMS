import { configureStore } from "@reduxjs/toolkit";
import { setAutoFreeze } from 'immer';

setAutoFreeze(false);

const store = configureStore({
    reducer: {},
    devTools: { name: "axiansReader" },
});

export default store;