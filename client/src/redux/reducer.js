import { combineReducers } from "@reduxjs/toolkit";
import CartReducer from './cart';

const rootReducer = combineReducers({
    cart : CartReducer,
})

export default rootReducer;