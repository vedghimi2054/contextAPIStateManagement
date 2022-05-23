import React,{useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './Auth';

export const Login = () => {
    const [user,setUser]=useState('');
    const auth=useAuth();
    const navigate=useNavigate();

    const location=useLocation();

    const redirectPath=location.state?.path|| '/'
    // console.log("localtion",location.state)
    const handleLogin=()=>{
        auth.login(user);
        navigate(redirectPath,{replace:true});
    
    }

  return (
   <>
   <label>
       UserName:<input type="text" onChange={(e)=>setUser(e.target.value)}></input>
   </label>
   <button onClick={handleLogin}>Login</button>
   </>
  )
}
