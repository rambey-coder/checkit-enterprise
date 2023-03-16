import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  toggleSidebar: false,
};

const UtilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setToggleSidebar: (state, action) => {
      state.toggleSidebar = action.payload;
    },
  },
});

export const { setLoading, setToggleSidebar } = UtilSlice.actions;

export default UtilSlice.reducer;
