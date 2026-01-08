import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from './features/userAuthSlice'
import userAuthApi from "./api/userAuthApiSlice";
import searchInputReducer from './features/searchItemsSlice';


export const store = configureStore({
    reducer:{
        userAuth:userAuthReducer,
        searchInput:searchInputReducer,
        [userAuthApi.reducerPath]:userAuthApi.reducer,
    },

    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(userAuthApi.middleware)
})