import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createOrder: null,
  orders: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCreateOrder: (state, action) => {
      state.createOrder = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = action.payload
    }
  },
});

export const { setCreateOrder,setOrders } = orderSlice.actions;

export default orderSlice.reducer;
