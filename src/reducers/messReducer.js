import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isloading : false,
  mess : []
}

export const messSlice = createSlice({
  name:'messInfo',
  initialState,
   reducers: {
    loadMessRequest: state =>{
        state.isloading=true;
    },
    loadMessSuccess : (state,action) =>{
        state.isloading = false;
        state.mess = action.payload;
    },
    loadMessFail : state =>{
        state.isloading = false;
        state.mess = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { loadMessRequest,loadMessFail,loadMessSuccess } = messSlice.actions

export default messSlice.reducer

