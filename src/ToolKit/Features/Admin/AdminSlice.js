import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderDetails: null,
  editOrder: null,
  deleteOrder: null,
  orderList: null,
};

const adminOrderSlice = createSlice({
  name: "adminOrder",
  initialState,
  reducers: {
    setOrderList: (state, action) => {
      state.orderList = action.payload;
    },
    setEditOrder: (state, action) => {
      state.editOrder = action.payload;
    },
    setOrderDetails: (state, action) => {
      state.orderDetails = action.payload;
    },
  },
});

export const { setEditOrder, setOrderDetails, setOrderList } =
  adminOrderSlice.actions;

export default adminOrderSlice.reducer;
