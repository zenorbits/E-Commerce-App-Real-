import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from './features/auth/userAuthSlice'
import userAuthApi from "./api/userAuthApiSlice";


export const store = configureStore({
    reducer:{
        userAuth:userAuthReducer,
        [userAuthApi.reducerPath]:userAuthApi.reducer,
    },

    middleware:(getDefaultMiddleWare)=>
        getDefaultMiddleWare().concat(userAuthApi.middleware)
})