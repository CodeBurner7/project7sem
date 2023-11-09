import React, { useContext, useState } from 'react'
import { NavLink,Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';
import { useEffect } from 'react';
import { Appcontext } from '../Context/ServiceContext';


const Wrapper=styled.section`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Jost", sans-serif;
// background-color:red;
// align-items: center;

}
.nav_container{
  width: 100%;
  height: 5rem;
  display: grid;
  grid-template-columns: 5rem 1fr 2fr 1fr 5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    // align-items: center;
}
.logo_section{
display: grid;
// background-color: #3b5998; 
grid-column: 2/3;
// justify-content: center;
align-items: center;
}
.list_section{
display:grid;
align-items:center;
}
.list{
display:flex;
justify-content:space-evenly;
// background-color:red;
}
.login_section{
display:grid;
justify-content:end;
// background-color:green;
}
`;
const Navbar = () => {
 const {isLoggedIn,setIsLoggedIn}=useContext(Appcontext);
 const handleLogout=()=>{
  localStorage.clear();
  setIsLoggedIn(false);
 }

  return (
    <>
    <Wrapper>
    <div className='nav_container'>
    <div className='logo_section'>
        {/* <img src="" alt="logo" /> */}
        <h1>SERVE</h1>
    </div>
    <div className='list_section'>
        <ul className='list'>
           <NavLink to="/"><li>Home</li></NavLink> 
           <NavLink to="/about"><li>About</li></NavLink>
           <NavLink to="/contact"><li>Contact</li></NavLink>
           <NavLink to="/services"><li>Services</li></NavLink>
        </ul>
    </div>
    
      { !isLoggedIn ?     <div className="login_section">
             
              <NavLink to="/signup"> Signup </NavLink>
              <NavLink to="/signin"> Signin </NavLink>
            </div>
            :
            <div className='login_section'>
              <button onClick={handleLogout}>Logout</button>
            </div>
}
    </div>
    </Wrapper>
    </>
  )
}

export default Navbar















// import React, { useContext, useState } from 'react'
// import { NavLink,Link } from 'react-router-dom';
// import styled from 'styled-components';
// import { Button } from './Button';
// import { useEffect } from 'react';
// import { Appcontext } from '../Context/ServiceContext';

// const Navbar = () => {
//   const Wrapper=styled.section`
//   * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: "Jost", sans-serif;
//   // background-color:red;
//   // align-items: center;

// }
// .nav_container{
//     width: 100%;
//     height: 5rem;
//     display: grid;
//     grid-template-columns: 5rem 1fr 2fr 1fr 5rem;
//     box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
//       rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
//       // align-items: center;
// }
// .logo_section{
//   display: grid;
//   // background-color: #3b5998; 
//   grid-column: 2/3;
//   // justify-content: center;
//   align-items: center;
// }
// .list_section{
//   display:grid;
//   align-items:center;
// }
// .list{
//   display:flex;
//   justify-content:space-evenly;
//   // background-color:red;
// }
// .login_section{
//   display:grid;
//   justify-content:end;
//   // background-color:green;
// }
//  `;
// //  const [isLoggedIn,setIsLoggedIn]=useState(false);
// // const{isLoggedIn,setIsLoggedIn}=useContext(Appcontext);

// //  useEffect(()=>{
// // const checkvalid=localStorage.getItem('userdata');
// // if(checkvalid){
// //   setIsLoggedIn(true);
// //   alert("checkvalid is true");
// // }else{
// //   setIsLoggedIn(false);
// //   alert("checkvalid is false");
// // }
// //  },[]);
// // useEffect(() => {
// //   console.log('isLoggedIn changed:', isLoggedIn);
// // }, [isLoggedIn]);

// //  const handleLogout=()=>{
// // localStorage.clear();
// //  }



// //  const checkvalid=localStorage.getItem('userdata');
// //  let username="";
// //  if(checkvalid){
// //   let username=JSON.parse(checkvalid).name;
// //  }

// //  console.log(username);
//     //  useEffect(()=>{
//     //     // const checkvalid=localStorage.getItem('userdata');
//     //     // const username=JSON.parse(checkvalid).name;
//     //     // if(checkvalid){
//     //     //   navigate("/");
//     //     // }
//     //   },[username])
//   return (
//     <>
//     <Wrapper>
//     <div className='nav_container'>
//     <div className='logo_section'>
//         {/* <img src="" alt="logo" /> */}
//         <h1>SERVE</h1>
//     </div>
//     <div className='list_section'>
//         <ul className='list'>
//            <NavLink to="/"><li>Home</li></NavLink> 
//            <NavLink to="/about"><li>About</li></NavLink>
//            <NavLink to="/contact"><li>Contact</li></NavLink>
//            <NavLink to="/services"><li>Services</li></NavLink>
//                       {/* {checkvalid ?  <NavLink to="/signin"> Signin </NavLink> :  <NavLink to="/signup"> Signup </NavLink>} */}
//         </ul>
//     </div>
    
//     {/* {isLoggedIn ? ( */}
//             <div className="login_section">
//               {/* <NavLink><Button>Login Now</Button></NavLink> */}
//               {/* <Button>Sign Up</Button> */}
//               {/* <a href="Signin.js">Sign in</a> */}
//               {/* <NavLink to="/signin"> Signin </NavLink> */}
//               {/* <button onClick={handleLogout}>Logout</button> */}
//               <NavLink to="/signup"> Signup </NavLink>
//               <NavLink to="/signin"> Signin </NavLink>
//             </div>
//           {/* ) : (  */}
//             {/* <div className="login_section">

//             </div> */}
//            {/* )}  */}
    
//     </div>
//     </Wrapper>
//     </>
//   )
// }

// export default Navbar






