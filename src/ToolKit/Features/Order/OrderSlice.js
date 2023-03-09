import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createOrder: null,
  orders: null,
  editOrder: null,
  orderDetail: null
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
    },
    setEditOrder: (state, action) => {
      state.editOrder = action.payload
    },
    setOrderDetails: (state, action) => {
      state.orderDetail = action.payload
    }
  },
});

export const { setCreateOrder, setOrders, setEditOrder, setOrderDetails } =
  orderSlice.actions;

export default orderSlice.reducer;
