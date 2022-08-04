import React, { useState } from "react";
import './login.css'
import { useDishes } from "../../context/DishesContext";
import {useNavigate} from 'react-router-dom'

function Login() { 

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
        fetch(
            `http://localhost:5300/userData`
          ).then((res) => res.json())
          .then((userDataResponse)=>{
            console.log(userDataResponse);
            userDataResponse.forEach((userData)=>{
                if(userData.username===username){
                    console.log("here1");
                    if(userData.password===password){
                        console.log(username);
                        setUsername(username);
                        return redirectToPolling();
                    } else {
                        console.log("here3");
                        setIsError(true);
                    }
                } else{
                    console.log("here4");
                }
            });
          })
            
    }
     
        return(
        <div className="container">
            <h1 className="heading"> Login</h1>
            <div className={`errorBanner ${isError?'show':'hidden'}`}><p>Invalid Username or Password</p></div>
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

 export default Login;