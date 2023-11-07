import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import messReducer from './reducers/messReducer'
import foodReducer from './reducers/foodReducer'



export const store = configureStore({
  reducer: {
    user:userReducer,
    mess:messReducer,
    food:foodReducer
  },
})

// export default store;