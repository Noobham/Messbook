import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading : false,
  isAuthenticated : false ,
  user : null
}

export const userSlice = createSlice({
  name:'userInfo',
  initialState,
   reducers: {
    loadUserRequest: state =>{
        state.isLoading=true;
    },
    loadUserSuccess : (state,action) =>{
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    loadUserFail : state =>{
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
    }
  },
})


export const { loadUserRequest,loadUserFail,loadUserSuccess } = userSlice.actions

export default userSlice.reducer

