import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from './features/userAuthSlice'
import userAuthApi from "./api/userAuthApiSlice";
import searchInputReducer from './features/searchItemsSlice';
import adminPageApi from "./api/getUserApiSlice";


export const store = configureStore({
    reducer:{
        userAuth:userAuthReducer,
        searchInput:searchInputReducer,
        [userAuthApi.reducerPath]:userAuthApi.reducer,
        [adminPageApi.reducerPath]:adminPageApi.reducer
    },

    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(userAuthApi.middleware).concat(adminPageApi.middleware)
})