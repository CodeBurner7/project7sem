import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.section`
width: 300px;
height: 400px;
background-color: #f5f5f5;
border: 2px solid #333;
border-radius: 10px;
padding: 1rem;
display: flex;
flex-direction: column;
// align-items: center;
// text-align: center;
margin: 10px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
transition: transform 0.2s;

&:hover {
  transform: scale(1.05);
}

figure{
    margin:0;
    // background-color:purple;
}
figure img{
    max-width: 100%;
    max-height: 100%;
}

 .caption{
margin: 0;
font-size: 14px;
color: #666;
 }
 .card-data-item {
// display: flex;
// flex-direction: column;
width: 100%; /* Ensure the content spans the entire width */
 }
 `;
const IndividualserviceBlock = (curElem) => {
  const { id, servicename, image, budget, category } = curElem;

    return (
        <Wrapper>
          <NavLink to={`/singleservice/${id}`} className="main-anchor">
              <figure>
                <img src={curElem.image} alt={servicename} />
                {/* <img src={`/images/${curElem.image}`} alt="Description of the image" /> */}
                <figcaption className="caption">{category}</figcaption>
              </figure>
    
                <div className="card-data-item">
                  <p>{servicename}</p>
                  <p>Ratings</p>
                  <p className="card-price">{budget}</p>
                </div>
          </NavLink>
        </Wrapper>
      );
}


export default IndividualserviceBlock