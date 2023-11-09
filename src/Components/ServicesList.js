import React, { useContext, useEffect, useState } from 'react'
import { Appcontext } from '../Context/ServiceContext';
import { NavLink } from 'react-router-dom';
// import myimage from '../../public/images/logo192.png';

const ServicesList = () => {
const {services1}=useContext(Appcontext);

var featuredCategories=new Set(services1.map((curElem,index)=>{
  return  curElem.category;
}))
var featuredCategories=[...featuredCategories,'All'];
// console.log(featuredCategories);

const recommendedServices=services1.filter((curElem)=>{
  return curElem.featured=='true';
})
console.log(recommendedServices);




//     const [products,setProducts]=useState([]);
//     useEffect(()=>{
// getProducts();
//     },[])
//     const getProducts=async ()=>{
//         let result=await fetch('http://localhost:5000/products');
//         result=await result.json();
//         setProducts(result);
//         console.warn(result);
//     }

  return (
    <>
        <div className='featured_services'>
<h1 style={{textAlign:"center"}}>Featured Categories</h1>
{/* <h2>{myname}</h2>
<h2>{myage}</h2> */}
{featuredCategories.map((curElem,index)=>{
return(
  <>
  <h1>{curElem}</h1>
  </>
)
})}
</div>


<hr />

<h1 style={{textAlign:"center"}}>Recommended Services</h1>
<div className='recommended_services' style={{margin:"5rem 2rem",display:"flex",justifyContent:"space-around"}}>
{recommendedServices.map((curElem,index)=>{
  return(<>
 
  <div className='services_list' style={{height:"200px",width:"300px",border:"2px solid black"}}>
<NavLink to={`/singleservice/${curElem.id}`} className="main-anchor">
      <div className="card">
        <figure>
          {/* <img src={curElem.image} alt={curElem.servicename} /> */}
          {/* <img src="/images/logo192.png" alt="Logo" /> */}
          <img src={`/images/${curElem.image}`} alt="Description of the image" />

          <figcaption className="caption">{curElem.category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-item">
            <h3>{curElem.servicename}</h3>
            <p className="card-price">{curElem.budget}</p>
          </div>
        </div>
      </div>
    </NavLink>

  </div>
  </>)
})}
</div>

    </>
  )
}

export default ServicesList;