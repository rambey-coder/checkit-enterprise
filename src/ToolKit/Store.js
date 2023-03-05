import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/User/UserSlice";
import createOrderReducer from "./Features/Order/OrderSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    createOrder: createOrderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export default store;
