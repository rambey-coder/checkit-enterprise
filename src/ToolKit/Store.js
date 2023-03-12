import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/User/UserSlice";
import orderReducer from "./Features/Order/OrderSlice";
import adminReducer from "./Features/Admin/AdminSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    userOrder: orderReducer,
    adminOrder: adminReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export const dispatch = store.dispatch;

export default store;
