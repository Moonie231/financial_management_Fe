import {configureStore} from "@reduxjs/toolkit";
import walletReducer from "./slice/walletSlice";
import userReducer from "./slice/userSlice";


const store = configureStore({
    reducer: {
        wallets: walletReducer,
        user: userReducer,
    },
});
export default store;
