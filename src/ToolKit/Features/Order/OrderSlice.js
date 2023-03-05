import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createOrder: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCreateOrder: (state, action) => {
      state.createOrder = action.payload;
    },
  },
});

export const { setCreateOrder } = orderSlice.actions;

export default orderSlice.reducer;
