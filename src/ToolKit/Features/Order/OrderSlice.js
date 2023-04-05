import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createOrder: null,
  orders: null,
  editOrder: null,
  orderDetail: null,
  customOrder: null,
  linkOrder: null,
  pictureOrder: null,
  parcelOrder: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setCreateOrder: (state, action) => {
      state.createOrder = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    },
    setEditOrder: (state, action) => {
      state.editOrder = action.payload;
    },
    setOrderDetails: (state, action) => {
      state.orderDetail = action.payload;
    },
    setCustomOrder: (state, action) => {
      state.customOrder = action.payload;
    },
    setLinkOrder: (state, action) => {
      state.linkOrder = action.payload;
    },
    setPictureOrder: (state, action) => {
      state.pictureOrder = action.payload;
    },
    setParcelOrder: (state, action) => {
      state.parcelOrder = action.payload;
    },
  },
});

export const {
  setCreateOrder,
  setOrders,
  setEditOrder,
  setOrderDetails,
  setCustomOrder,
  setLinkOrder,
  setPictureOrder,
  setParcelOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
