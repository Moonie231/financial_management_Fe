import {configureStore} from "@reduxjs/toolkit";
import walletReducer from "./slice/walletSlice";

const store = configureStore({
    reducer: {
        wallets: walletReducer,
    },
});
export default store;
