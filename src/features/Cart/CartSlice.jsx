import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
        addToCart: (state, payload) => {
            state.value.push(payload.payload);
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
