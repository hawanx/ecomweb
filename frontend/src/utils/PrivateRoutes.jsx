import React, { useContext, useState } from "react";
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext"

const PrivateRoutes = () => {
  
  const {isAuthenticated} = useContext(AuthContext)

return (
    isAuthenticated ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes;