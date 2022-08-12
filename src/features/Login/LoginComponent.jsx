import React, { useState } from "react";
import './login.css'
import { useDishes } from "../../context/DishesContext";
import {useNavigate} from 'react-router-dom'
import users from '../../users.json'

function LoginComponent() { 

    const[username,setUser] = useState(""); 
    const[password,setPwd] = useState(""); 
    const[isError,setIsError] = useState(false); 

    const { setUsername } = useDishes();
    const navigate=useNavigate();
   const handleChange =(e) =>{
        const{name,value}=e.target;
        if(name==='username')
            setUser(value);
        if(name==='password')
            setPwd(value);
        console.log(username);
        console.log(password);
    }

    const redirectToPolling = () => {
        navigate("/polling");
    }

    const doLogin=() => {
        console.log(users);
        users.loginDetails.forEach((userData)=>{
            if(userData.username===username){
                console.log("here1");
                if(userData.password===password){
                    console.log(username);
                    setUsername(username);
                    return redirectToPolling();
                }
            }
        });
        setIsError(true);
    }

    const getErrorBannerClass = () => {
        return isError ?'show':'hidden';
    }
        return(
        <div className="login-container">
            <div className="heading"> Login</div>
            <div className={'errorBanner '+getErrorBannerClass()}><p>Invalid Username or Password</p></div>
            <div className="form-group">
                <input type="text" name="username" className="form-control" placeholder="Username" required onChange={handleChange}></input>
            </div>
    
            <div className="form-group">
            <input type="password" name="password" className="form-control" placeholder="Password" required onChange={handleChange}></input>
            </div>
            <button className="post-submit" onClick={doLogin}>Login</button>
            <span className="form-end"></span>
        </div>


        )
    }

 export default LoginComponent;