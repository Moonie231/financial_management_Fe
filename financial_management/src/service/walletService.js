import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const wallet = createAsyncThunk(
    'wallets/getWallet',
    async (data)=>{
        const res = await customAxios.get('wallets/' + data);
        return res.data;
    }
)

export const addWallet = createAsyncThunk(
    'wallet/addWallet',
    async (data) => {
        const res = await customAxios.post('wallets/create',  data)
        return res.data;
    }
)