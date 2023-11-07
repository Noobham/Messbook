import axios from "axios"
import { loadFoodFail, loadFoodRequest, loadFoodSuccess } from "../reducers/foodReducer"


const config = {
    headers: {
      "Content-Type": "application/json"
      },
      withCredentials: true
    }

export const loadFood = (id) => async (dispatch)=> {
    const url = `http://localhost:3000/user/mess/${id}`
   
    dispatch(loadFoodRequest())
    try{
        const res = await axios.get(url,config);
        
        dispatch(loadFoodSuccess(res.data.foodList))
    }catch(err){
        dispatch(loadFoodFail())
    }
}

export const createFood =  ({id,price,foodName})=> async(dispatch) =>{
    const url = `http://localhost:3000/admin/create/food/${id}`

    try{
        await axios.post(url,{foodName,price},config);
    }catch{
        console.log(`error from fetching food`);
    }
}
