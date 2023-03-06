import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/User/UserSlice";
import orderReducer from "./Features/Order/OrderSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export const dispatch = store.dispatch;

export default store;
