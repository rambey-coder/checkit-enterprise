import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")) || null,
  token: sessionStorage.getItem("checkitAccessToken") || null,
};

const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        
    }
})