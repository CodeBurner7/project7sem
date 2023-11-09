//1
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Appcontext } from '../Context/ServiceContext';
import styled from 'styled-components';

const Wrapper=styled.section``;
const SingleService = () => {
  const{getSingleService,sService}=useContext(Appcontext);
  console.log(sService);

    const {id}=useParams ();
    // alert(id);

    //singleservice ko individual data
    const {
      id: idnew,
      servicename,
    } = sService;


    useEffect(()=>{
      getSingleService((id));
    },[] );


return(
  <>
  <h1>singleservice</h1>
  </>
)
}

export default SingleService
