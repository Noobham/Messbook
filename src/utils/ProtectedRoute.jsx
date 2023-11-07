import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({isAuthenticated,user}) => {
    
  if(!isAuthenticated) {
    console.log(isAuthenticated);
    return <Navigate to={'/login'} />}

  
  return (
    <Outlet/>
  );
}

export default ProtectedRoute;