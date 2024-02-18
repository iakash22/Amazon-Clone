import {createSlice} from '@reduxjs/toolkit'

const initial = {
    items : [],
    totalItems : 0,
    totalAmount : 0, 
};

const CartReducer = createSlice({
    name : 'cart',
    initialState : initial,
    reducers :{
        addToCart : (state, action) => {
            const item = action.payload;
            const index = state.items.findIndex((i) => i.id === item.id); 
            if(index >= 0){
                return ;
            }

            state.items.push(item);
            state.totalItems++;
            state.totalAmount += item.price
        },
        removeFromCart : (state, action) => {
            const itemId = action.payload;
            const index = state.items.findIndex((i) => i.id === itemId);
            if(index >= 0){
                state.totalItems--;
                state.totalAmount -= state.items[index].price;
                state.items.splice(index, 1);
            }
        },
        resetCart : (state) => {
            state.cart = [],
            state.totalItems = 0;
            state.totalAmount = 0;
        }
    }
});

export const {addToCart, removeFromCart, resetCart} = CartReducer.actions;
export default CartReducer.reducer;