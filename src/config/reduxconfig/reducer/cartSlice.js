import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        
            addProduct: (state, action) => {
                const product = state.find(
                    (item) => item.id === action.payload.product.id
                );

                if (product) {
                    product.quantity += 1;
                } else {
                    state.push({
                        ...action.payload.product,
                        quantity: 1,
                    });
                }
            },
        
        addQuantity: (state, action) => {

            const product = state.find((item) =>
                item.id === action.payload
            );
            if (product) {
                product.quantity += 1
            }
        },
        removeQuantity: (state, action) => {

            const product = state.find((item) =>
                item.id === action.payload
            );
            if (product && product.quantity > 0) {
                product.quantity -= 1
            }
        },
    }

})

export const { addProduct, addQuantity, removeQuantity } = cartSlice.actions;
export default cartSlice.reducer