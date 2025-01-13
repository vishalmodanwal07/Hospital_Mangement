import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const navigate =useNavigate();
    const token = useSelector((state)=> state.auth.token);
    if(!token){
        return navigate('/')
    }
  return children;
   
}

export default ProtectedRoute;
