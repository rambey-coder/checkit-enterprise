import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Features/User/UserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export default store;
