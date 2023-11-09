//1
import React, { useContext, useEffect, useReducer, useState,useCallback } from 'react'
import Serveapi from '../Components/Serveapi';
import { createContext } from 'react'
 const Appcontext=createContext();

 const initialState={
    isLoading:false,
    isError:false,
    recommendedServices1:[],
    services1:[],
    sService:[]
 }

 const reducer=(state,action)=>{
    switch(action.type){
        case "SET_LOADING":
            return {
              ...state,
              isLoading: true,
            };

        case "SET_SERVICEAPI_DATA":
                const featureData = action.payload.filter((curElem) => {
                  return curElem.featured == "true";
                });
            
                return {
                  ...state,
                  isLoading: false,
                  services1: action.payload,
                  recommendedServices1: featureData,
                };
            case "API_ERROR":
                return {
                ...state,
                isLoading: false,
                isError: true,
                };
            case "SET_SINGLE_SERVICE":
                const {services1}=state;
                let services1copy=[...services1];
                const singledata=services1copy.filter((curElem)=>{
                        return curElem.id == action.payload;
                })
                return{
                    ...state,
                    sService:singledata,
                }
            default:
                return state;
    }
 };

const AppProvider = ({children}) => {
const [services,setServices]=useState(Serveapi);//set own api
const [isLoggedIn,setIsLoggedIn]=useState(false);
const[a,seta]=useState([]);
const [state,dispatch]=useReducer(reducer,initialState);

const navbarchangegar=()=>{
    setIsLoggedIn(true);
}

//for services list
const getServices=async ()=>{
    dispatch({ type: "SET_LOADING" });
    try{
        let result=await fetch('http://localhost:5000/services');
        result=await result.json();
        dispatch({ type: "SET_SERVICEAPI_DATA", payload: result });
    }catch(error){
        dispatch({ type: "API_ERROR" });
        }
};



//for getting single service info
// const getSingleService=async (url)=>{
//     let result=await fetch(url);
//     result=await result.json();
//     setsService(result);
//     console.log(result);
// }



//----------------------


// const getSingleService = async (id) => {
//     try {
//     //   const response = await fetch(`http://localhost:5000/services/${id}`,{
//     //     method:"Post",
//     //           body:JSON.stringify({id}),
//     //           headers:{
//     //             'Content-Type':"application/json"
//     //           },
//     //   });
//     //   if (response.ok) {
//     //     const result = await response.json();
//     //         seta(result);
//     //         console.log(result);

//     //   }

//     const response = await fetch(`http://localhost:5000/services/${id}`);
//     if (response.ok) {
//       const result = await response.json();
//           seta(result);
//           console.log(result);

//     }
//        else {
//         // Handle the response status (e.g., 404 or 500 errors)
//         console.error(`Error: ${response.status}`);
//       }
//     } catch (error) {
//       // Handle network errors or fetch-related errors
//       console.error(error);
//     }
//   };

//--------------------
const getSingleService = (sentid)=>{
    dispatch({ type: "SET_SINGLE_SERVICE", payload: sentid });
}




    useEffect(()=>{
getServices();
    },[]);


return <Appcontext.Provider value={{
myname:"ram",
myage:20,
...state,
services,
navbarchangegar,
isLoggedIn,
setIsLoggedIn,
getSingleService,
// sService
}}>{children}</Appcontext.Provider>
}


export {AppProvider,Appcontext};
