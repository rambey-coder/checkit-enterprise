import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")) || null,
  token: sessionStorage.getItem("checkitAccessToken") || null,
  response: {
    message: "",
    type: "",
  },
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    createResponse: (state, action) => {
      state.response = {
        message: action.payload.message,
        type: action.payload.type,
      };
    },
  },
});

export const { createResponse } = userSlice.actions;

export default userSlice.reducer;
