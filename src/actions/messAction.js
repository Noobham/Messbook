import axios from "axios"
import { loadMessFail, loadMessRequest, loadMessSuccess } from "../reducers/messReducer"


const config = {
    headers: {
      "Content-Type": "application/json"
      },
      withCredentials: true
    }

export const loadMess = () => async (dispatch)=>{
    const url = "http://localhost:3000/user/mess"
   
    dispatch(loadMessRequest())
    try{
        const res = await axios.get(url,config);
        dispatch(loadMessSuccess(res.data.mess))
    }catch(err){
        dispatch(loadMessFail())
    }
}

export const createMess =  (messName)=> async(dispatch) =>{
    const url = `http://localhost:3000/admin/create/mess`

    try{
        await axios.post(url,{messName},config);
    }catch{
        console.log(`error from creating mess`);
    }
}