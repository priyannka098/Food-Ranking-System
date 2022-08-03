import React, { useEffect, useState } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";

 class Login extends React.Component {

    state={
        username:'',
        password:'',
        isError:false
    };

    handleChange =(e) =>{
        const{name,value}=e.target;
        if(name==='username')
            this.state.username=value;
        if(name==='password')
            this.state.password=value;
        console.log(this.state);
    }

    redirectToPolling = () => {
        window.location.href="/polling";
    }

    doLogin=() => {
        fetch(
            `http://localhost:5300/userData`
          ).then((res) => res.json())
          .then((userDataResponse)=>{
            console.log(userDataResponse);
            userDataResponse.forEach((userData)=>{
                if(userData.username===this.state.username){
                    console.log("here1");
                    if(userData.password===this.state.password){
                        console.log("here2");
                        return this.redirectToPolling();
                    } else {
                        console.log("here3");
                        this.setState((cur)=>{cur.isError=true;});
                    }
                } else{
                    console.log("here4");
                }
            });
          })
            
    }
     
    render(){
        return(
        <div className="container">
            <h1 className="heading"> Login</h1>
            <div className={`errorBanner ${this.state.isError?'show':'hidden'}`}><p>Invalid Username or Password</p></div>
            <div className="form-group">
                <input type="text" name="username" className="form-control" placeholder="Username" required onChange={this.handleChange}></input>
            </div>
    
            <div className="form-group">
            <input type="password" name="password" className="form-control" placeholder="Password" required onChange={this.handleChange}></input>
            </div>
            <button className="post-submit" onClick={this.doLogin}>Login</button>
            <span className="form-end"></span>
        </div>


        )
    }
 }

 export default Login;