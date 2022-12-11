import { configureStore } from "@reduxjs/toolkit";
import ShopSlice from "./features/ShopItems/ShopSlice";
import cartSlice from "./features/Cart/CartSlice";
export const store = configureStore({
    reducer: {
        shop: ShopSlice,
        cart: cartSlice
    }
})

