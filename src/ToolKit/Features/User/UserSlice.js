import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")) || null,
  token: sessionStorage.getItem("checkitAccessToken") || null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    currentUser: (state, action) => {
      state.user = action.payload;
    },

    currentUserToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { currentUser } = userSlice.actions;

export default userSlice.reducer;
