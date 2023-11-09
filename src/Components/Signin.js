//BACKEND WALA SIGNIN
import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Appcontext } from '../Context/ServiceContext';

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const{navbarchangegar}=useContext(Appcontext);
    // const checkvalid=localStorage.getItem('userdata');
    // const username=JSON.parse(checkvalid).name;

    const Handlelogin= async ()=>{
            let result= await fetch('http://localhost:5000/login',{
              method:"Post",
              body:JSON.stringify({email,password}),
              headers:{
                'Content-Type':"application/json"
              },
            });
            result=await result.json();
      console.log(result);
      if(result.name){
        localStorage.setItem('userdata',JSON.stringify(result));
        navbarchangegar();
        navigate('/')
      }else{
        alert("please enter correct details");
      }
    }
    // useEffect(()=>{
    //     const checkvalid=localStorage.getItem('userdata');
    //     if(checkvalid){
    //       navigate("/");
    //     }
    //   })
  return (
    <>
    <h1>login</h1>
    <form className='signup-form'>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" placeholder='Enter your email'value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type="button"  
        onClick={Handlelogin}
        >Login</button>
    </form>
    </>
  )
}

export default Login

