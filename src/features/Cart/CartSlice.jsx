import { PlaylistAddOutlined } from "@mui/icons-material";
import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
        addToCart: (state, payload) => {
            const item = state.value.find((item) => item.id === payload.payload.id);
            if(item) {
                item.count++;
            } else {
                state.value.push(payload.payload);
            }
        },
        decrement: (state, payload) => {
            const item = state.value.find((item) => item.id === payload.payload);
            if(item.count > 0) {
                item.count--;
            }
        },
        increment: (state, payload) => {
            const item = state.value.find((item) => item.id === payload.payload);
            item.count++;
        },
        removeItem: (state, payload) => {
            state.value = state.value.filter((item) => item.id !== payload.payload);
        }        
    }
})

export const {addToCart, increment, decrement, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
