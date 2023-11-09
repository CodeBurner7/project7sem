import React from 'react'
import styled from 'styled-components';
import Navbar from './Components/Navbar'
import Signin from './Components/Signin'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SingleService from './Components/SingleService';
import Signup from './Components/Signup';
import Footer from './Components/Footer';
import AddServices from './Components/AddServices(for-admin)';
import ServicesList from './Components/ServicesList';
import Categoryblock from './Components/Categoryblock';

const App = () => {
  return (
    <>
        <Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<h1>About</h1>}></Route>
    <Route path="/contact" element={<h1>Contact</h1>}></Route>
    <Route path="/services" element={<h1>Services</h1>}></Route>
   <Route path="/signin" element={<Signin/>}></Route>
   <Route path="/signup" element={<Signup/>}></Route>
   <Route path="/singleservice/:id" element={<SingleService/>}></Route>
   <Route path='/addservices' element={<AddServices/>}></Route>
   <Route path='/serviceslist' element={<ServicesList/>}></Route>
   {/* <Route path='/categoryblock' element={<Categoryblock/>}></Route> */}

   </Routes>
   <Footer/>
   </Router>

    </>
  )
}

export default App



//Signuup.js
//VIDEO 12----yedi hamlae signin  garem bhane balla aru navbar ko functionality run garna payinxaa natra no. ra signup garesea logout ko functionality dekhauni natra nadekhauni i.e localdatastorage bata check garera duita ma kun dekhauni bhanera toggke garincaa.
//this method is helpful when we login and we dont wanna show signup.we show logout in dropdown of login and when we click on logout then we will show again signup and signin option in navbar.

//VIDEO 13
//logout functionality xa ueha when we click on logout the localstrage ckear hunxa ra signup wala dekhinxa.


//HIJO 10/8/2023
//ma serviceslist create gariyo jaha api ko data tanninxa from servicecontext.ra home ma ni teii display garaxa tara afnai local api lae
//home ko ma yo backend ko serviceslist halni
//serviceslist ra addservice ko link garaxaina tara route garaxa so paxi respective link afai garauni
