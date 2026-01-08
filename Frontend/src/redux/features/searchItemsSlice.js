import { createSlice } from '@reduxjs/toolkit';

export const searchItemSlice = createSlice({
    name:'searchItem',
    initialState:{
        input:''
    },
    reducers:{
        inputSearch:(state,action)=>{

            state.input=action.payload;

        }   
    }
});

export const {inputSearch} = searchItemSlice.actions;
export default searchItemSlice.reducer;