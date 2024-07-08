import { Redirect, Route } from "react-router-dom";
import React from 'react';
const isAuth=()=>{
    let token=localStorage.getItem('token')
    let role=localStorage.getItem('role')
    if(token&&role=="admin"){
        return true
    }else {return false}
}
const PrivateRoute = ({component:Component,...rest}) => {
   
    return ( <Route {...rest} component={(props)=>(isAuth())?<Component {...props}/>:<Redirect to='/'/>}/> );
}
 
export default PrivateRoute;