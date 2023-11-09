import React from 'react'
import { useState } from 'react';

const AddServices = () => {

    const [error,setError]=useState(false);
    const [serviceFormData, setServiceFormData] = useState({
      id:'',
      servicename: '',
      category: '',
      image: '',
      location: '',
      budget: '',
      time: '',
      servicetype: '',
      taskername: '',
      description: '',
      featured: '', // Use a checkbox for the "featured" field later
    });
const{id,servicename,category,image,location,budget,time,servicetype,taskername,description,featured}=serviceFormData;

  // Handle form input changes
  const HandleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setServiceFormData((prevData) => ({
      ...prevData,
      [name]:  value,
    }));
  };


    const Addservice= async ()=>{
        // console.log(serviceFormData.servicename);
      // console.log(servicename);
alert("do you sure want to add the service");
      // if(!serviceFormData.servicename || !serviceFormData.image || !serviceFormData.category || !serviceFormData.location || !serviceFormData.budget || !serviceFormData.time || !serviceFormData.servicetype || !serviceFormData.taskername || !serviceFormData.description || !serviceFormData.featured){
      //   setError(true);
      //   return false;
      // }
// const userId=JSON.parse(localStorage.getItem('userdata'))._id;
let result=await fetch('http://localhost:5000/add-service',{
    method:'post',
    body:JSON.stringify({id,servicename,category,image,location,budget,time,servicetype,taskername,description,featured}),
    headers:{
      'Content-Type':"application/json"
    },
})
result=await result.json();
      console.log(result);
    }

  return (
    <>
    <h1>Add Services</h1>
        <form className='addproduct-form'>
        <label htmlFor="name">ServiceId</label>
        <input type="text" name="id" id="id" placeholder='Enter service id' 
        value={serviceFormData.id} onChange={HandleInputChange}/>
        {error && !serviceFormData.id &&<span className='error-input'>Enter valid id</span>}
        

        <label htmlFor="name">ServiceName</label>
        <input type="text" name="servicename" id="servicename" placeholder='Enter service name' 
        value={serviceFormData.servicename} onChange={HandleInputChange}/>
        {error && !serviceFormData.servicename &&<span className='error-input'>Enter valid servicename</span>}
        
        <label htmlFor="name">Category</label>
        <input type="text" name="category" id="category" placeholder='Enter service category' 
        value={serviceFormData.category} onChange={HandleInputChange}/>
        {error && !serviceFormData.category &&<span className='error-input'>Enter valid category</span>}

        <label htmlFor="name">Image</label>
        <input type="text" name="image" id="image" placeholder='Enter service image' 
        value={serviceFormData.image} onChange={HandleInputChange}/>
        {error && !serviceFormData.image &&<span className='error-input'>Enter valid image</span>}

        <label htmlFor="name">Location</label>
        <input type="text" name="location" id="location" placeholder='Enter service location'
         value={serviceFormData.location} onChange={HandleInputChange}/>
        {error && !serviceFormData.location &&<span className='error-input'>Enter valid location</span>}

        <label htmlFor="name">Budget</label>
        <input type="text" name="budget" id="budget" placeholder='Enter service budget' 
        value={serviceFormData.budget} onChange={HandleInputChange}/>
        {error && !serviceFormData.budget &&<span className='error-input'>Enter valid budget</span>}

        <label htmlFor="name">Time</label>
        <input type="text" name="time" id="time" placeholder='Enter service time'
         value={serviceFormData.time} onChange={HandleInputChange}/>
        {error && !serviceFormData.time &&<span className='error-input'>Enter valid time</span>}

        <label htmlFor="name">Servicetype</label>
        <input type="text" name="servicetype" id="servicetype" placeholder='Enter service servicetype' 
        value={serviceFormData.servicetype} onChange={HandleInputChange}/>
        {error && !serviceFormData.servicetype &&<span className='error-input'>Enter valid servicetype</span>}

        <label htmlFor="name">Taskername</label>
        <input type="text" name="taskername" id="taskername" placeholder='Enter service taskername' 
        value={serviceFormData.taskername} onChange={HandleInputChange}/>
        {error && !serviceFormData.taskername &&<span className='error-input'>Enter valid taskername</span>}

        <label htmlFor="name">Featured</label>
        <input type="text" name="featured" id="featured" placeholder='true/false'
         value={serviceFormData.featured} onChange={HandleInputChange}/>
        {error && !serviceFormData.featured &&<span className='error-input'>Enter valid featured</span>}

        <button type="button"  onClick={Addservice}>Add services</button>        
        </form>
    </>
  )
}

export default AddServices


































// HANDLE INPUT CHANGE

  // const HandleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   // const { servicename,category,image,location,budget,time,servicetype,taskername,description,featured} = e.target;
  //   setServiceFormData((prevData) => ({
  //     ...prevData,
  //     [name]:  value,
  //   }));
  //   // setServiceFormData({[name]:value});
  // };
  // console.log(serviceFormData.servicename);


  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };






// import React from 'react'
// import { useState } from 'react';

// const AddServices = () => {
// //     const[name,setName]=useState("");
// //     const[price,setPrice]=useState("");
// //     const[category,setcategory]=useState("");
// //     const[company,setcompany]=useState("");
//     const [error,setError]=useState(false);
//     const Addservice= async ()=>{
//       if(!serviceFormData.servicename || !serviceFormData.image || !serviceFormData.category || !serviceFormData.location || !serviceFormData.budget || !serviceFormData.time || !serviceFormData.servicetype || !serviceFormData.taskername || !serviceFormData.description || !serviceFormData.featured){
//         setError(true);
//         return false;
//       }
// const userId=JSON.parse(localStorage.getItem('userdata'))._id;
// let result=await fetch('http://localhost:5000/add-product',{
//     method:'post',
//     body:JSON.stringify({name,price,category,company,userId}),
//     headers:{
//       'Content-Type':"application/json"
//     },
// })
// result=await result.json();
//       console.log(result);
//     }

// const [serviceFormData, setServiceFormData] = useState({
//     servicename: '',
//     category: '',
//     image: '',
//     location: '',
//     budget: '',
//     time: '',
//     servicetype: '',
//     taskername: '',
//     description: '',
//     featured: '', // Use a checkbox for the "featured" field later
//   });
//   // Handle form input changes
//   const HandleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setServiceFormData((prevData) => ({
//       ...prevData,
//       [name]:  value,
//     }));
//   };
//   console.log(serviceFormData.servicename);

//   return (
//     <>
//     <h1>Add Services</h1>
//         <form className='addproduct-form'>
//         <label htmlFor="name">ServiceName</label>
//         <input type="text" name="servicename" id="servicename" placeholder='Enter service name' 
//         value={serviceFormData.servicename} onChange={HandleInputChange}
//         />
//         {error && !serviceFormData.servicename &&<span className='error-input'>Enter valid servicename</span>}
//         <label htmlFor="name">Category</label>
//         <input type="text" name="category" id="category" placeholder='Enter service category' />
//         <label htmlFor="name">Image</label>
//         <input type="text" name="image" id="image" placeholder='Enter service image' />
//         <label htmlFor="name">Location</label>
//         <input type="text" name="location" id="location" placeholder='Enter service location' />
//         <label htmlFor="name">Time</label>
//         <input type="text" name="time" id="time" placeholder='Enter service time' />
//         <label htmlFor="name">Taskername</label>
//         <input type="text" name="taskername" id="taskername" placeholder='Enter service taskername' />
//         <label htmlFor="name">Featured</label>
//         <input type="text" name="featured" id="featured" placeholder='true/false' />

//         <button type="submit"  onClick={Addservice}>Add Service</button>
//         </form>
//     </>
//   )
// }

// export default AddServices