import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from './features/auth/userAuthSlice'


export const store = configureStore({
    reducer:{
        userAuth:userAuthReducer,
    }
})