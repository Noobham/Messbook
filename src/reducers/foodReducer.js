import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isloading : false,
  foodList : []
}

export const foodSlice = createSlice({
  name:'foodInfo',
  initialState,
   reducers: {
    loadFoodRequest: state =>{
        state.isloading=true;
    },
    loadFoodSuccess : (state,action) =>{
        state.isloading = false;
        state.foodList = action.payload;
    },
    loadFoodFail : state =>{
        state.isloading = false;
        state.foodList = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { loadFoodRequest,loadFoodFail,loadFoodSuccess } = foodSlice.actions

export default foodSlice.reducer

