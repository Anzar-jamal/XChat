import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRoute = ({childern, usre, redirect="/login"}) => {

    if(!user) return <Navigate to={redirect} />;

  return childern ? childern : <Outlet /> ;
};

export default ProtectRoute