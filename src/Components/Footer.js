

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import the necessary icons

const Wrapper = styled.div`
// bottom:0;
.whole_footerdiv {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  // background-color: purple; /* Set the background color to purple */
//   clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 0% 100%);
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// z-index:-1; /* Set the pseudo-element background color to transparent */

}

  .company_details {
    display: grid;
    grid-template-columns: 1fr; /* 1/3 for company_details, 2/3 for links */
    // background-color: green;
    margin:20px 20px;
    padding:10px;

  }
  .company_details h1,p{
    // background-color:blue;
    
  }

  .links {
        margin:20px 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns in links */
    gap: 20px;
    // background-color: orange;

  }


  .div1,
  .div2,
  .div3 {
    color: #333;
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
    text-align:center;

  }

  h1 {
    font-size: 24px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 5px 0;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 20px;
    border-radius: 5px;
    cursor: pointer;
    width:fit-content;
    margin:0 auto;
  }
`;
const Clipdiv=styled.div`
clip-path: polygon(85% 0, 100% 0, 100% 100%, 28% 100%);
background-color:crimson;
width:100%;
height :auto;
position:absolute;
// bottom:0;
z-index:-1;
`;
const Footer = () => {
  return (
    <>
    <Clipdiv></Clipdiv>
      <Wrapper>
        <div className="whole_footerdiv">
          <div className="company_details">
            <h1>SERVE</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <button>Request a service</button>
          </div>
          <div className="links">
            <div className="div1">
              <h1>Explore on</h1>
              <ul className='explore_links'>
                <NavLink to="/home"><li>Home</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/contact"><li>Contact</li></NavLink>
                <NavLink to="/profile"><li>Profile</li></NavLink>
                <NavLink to="/services"><li>Services</li></NavLink>
              </ul>
            </div>
            <div className="div2">
              <h1>Categories</h1>
              <ul>
                <li>Cleaning</li>
                <li>Maintenance</li>
                <li>Assignments</li>
                <li>Photography</li>
                <li>Other services</li>
              </ul>
            </div>
            <div className="div3">
              <h1>Contacts</h1>
              <ul>
              <li><FaMapMarkerAlt /> Location</li> {/* Add the Location icon */}
                <li><FaPhone /> Contact</li>       {/* Add the Contact icon */}
                <li><FaEnvelope /> Email</li>       {/* Add the Email icon */}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}


export default Footer;
