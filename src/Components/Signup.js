//backend wala signup
import React, { useState ,useEffect} from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const navigate=useNavigate();

// useEffect(()=>{
//   const checkvalid=localStorage.getItem('userdata');
//   if(checkvalid){
//     navigate("/");
//   }
// })
    

    const CollectData=async ()=>{
      let result= await fetch('http://localhost:5000/register',{
        method:"Post",
        body:JSON.stringify({name,email,password}),
        headers:{
          'Content-Type':"application/json"
        },
      });
      result=await result.json();
console.log(result);
// localStorage.setItem('userdata',JSON.stringify(result));
  navigate("/");

// if(result){
//   alert("result aaxa signu backend a data gayepaxi");
//   navigate('/');
// }
    }
  return (
    <>
    <form className='signup-form'>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder='Enter your name' value={name} onChange={(e)=>{setName(e.target.value)}} />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" placeholder='Enter your email'value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type="button"  onClick={CollectData}>Signup</button>
    </form>
    </>
  )
}

export default Signup












