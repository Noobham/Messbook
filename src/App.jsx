
import { useState } from 'react';
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

function App() {

  const [users,setUser] = useState([{name:"Shubham Kumar",email:"shubhamkumar200101@gmail.com",roll_num:"20075085",password:"1234"}]);
  const [isAuthenticated,setIsAuthenticated] = useState(true);

  return (
    <>
      <Header/>
     <Routes>
      <Route path="/login" element={<SignIn user={users}/>}/>
      <Route path="/signUp" element={<SignUp setUser={setUser}/>} />

      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>

        <Route path='/dashboard/food/create' element={<CreateFood/>}></Route>

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
