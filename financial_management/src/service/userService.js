import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const login = createAsyncThunk("user/login", async (data) => {
    const res = await customAxios.post("users/login", data);
    return res.data;
});

export const register = createAsyncThunk("user/register", async (data) => {
    const res = await customAxios.post("users/register", data);
    return res.data;
});
