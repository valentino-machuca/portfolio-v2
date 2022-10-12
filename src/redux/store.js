import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./slice";

const store = configureStore({
    reducer: mainReducer,
})

export default store;

