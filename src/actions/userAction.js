import axios from "axios"
import { loadUserFail, loadUserRequest, loadUserSuccess } from "../reducers/userReducer"

const config = {
    headers: {
      "Content-Type": "application/json"
      },
      withCredentials: true
    }

export const loadUser = () => async (dispatch)=>{
    const url = "http://localhost:3000/user/me"
   
    dispatch(loadUserRequest())
    try{
        const res = await axios.get(url,config);
        dispatch(loadUserSuccess(res.data.user))
    }catch(err){
        dispatch(loadUserFail())
    }
}

export const loginUser = (rollNo,password) => async (dispatch)=>{
    const url = "http://localhost:3000/user/login"
    dispatch(loadUserRequest());
    try{
        const res = await axios.post(url,{rollNo,password},config);
    
        dispatch(loadUserSuccess(res.data.user));
    }catch(err){
        dispatch(loadUserFail());
    }
}

