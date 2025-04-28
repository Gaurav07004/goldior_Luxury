import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/cart/cartSlice";
import userReducer from "./Features/user/userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Make sure to use default export here
export default store;
