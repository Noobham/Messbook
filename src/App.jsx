
import { useEffect, useState } from 'react';
import './App.css'
import SignIn from "./Component/SignIn"
import SignUp from "./Component/SignUp"
import ProtectedRoute from './utils/ProtectedRoute';
import MessBoard from './Component/DMess.jsx';


import {Routes, Route } from "react-router-dom";
import DMessList from './Component/DMessList';
import { Header } from './Component/Header';
import DStdentList from './Component/DStdentList';
import CreateMess from './Component/CreateMess';
import CreateFood from './Component/CreateFood';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './actions/userAction';
import Home from './Component/Home';
import IsLogin from './utils/IsLogin';

function App() {

  // const [users,setUser] = useState([{name:"Shubham Kumar",email:"shubhamkumar200101@gmail.com",roll_num:"20075085",password:"1234"}]);
  // const [isAuthenticated,setIsAuthenticated] = useState(true);
  const dispatch = useDispatch();

  
  const {isAuthenticated,isLoading} = useSelector(state => state.user);

  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch])

  if(isLoading){
    return <>Loading...</>
  }

  return (
    <>
      <Header isAuthenticated={isAuthenticated}/>
     <Routes>
      <Route path='/' element={<Home/>}/>


        <Route path="/login" element={<SignIn />}/>
        <Route path="/signUp" element={<SignUp />} />
  

      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} isLoading={isLoading}/>}>

        <Route path='/dashboard/food/create/:id' element={<CreateFood/>}></Route>

        <Route path='/dashboard/mess' element={<DMessList/>}/>
        <Route path='/dashboard/mess/create' element={<CreateMess/>}></Route>
        <Route path='/dashboard/students' element={<DStdentList/>}></Route>

        <Route path='/dashboard/:id' element={<MessBoard/>}></Route>
        
      </Route>
     </Routes>
    </>
  )
}

export default App
