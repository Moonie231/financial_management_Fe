import { createSlice } from "@reduxjs/toolkit";
import {addWallet, wallet} from "../../service/walletService";

const initialState = {
    wallets: [],
};

const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(wallet.fulfilled, (state, action) => {
            state.wallets = action.payload;
        });
        builder.addCase(addWallet.fulfilled, (state, action) => {
            state.wallets.push(action.payload);
        });
    },
});

export default walletSlice.reducer;
