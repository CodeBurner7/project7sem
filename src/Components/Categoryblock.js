
import React from 'react';
import { MdCleaningServices, MdCameraAlt, MdBuild, MdAssignment } from 'react-icons/md';
import styled from 'styled-components';

const Wrapper = styled.section`
.main_block {
  width: 200px;
  height: 300px;
  background-color: #f2f2f2; /* Light gray background */
  border: 2px solid #333; /* Dark border */
  border-radius: 8px; /* Rounded corners */
  padding: 10px; /* Add padding */
  display: flex;
  flex-direction: column;
   align-items: center;
  justify-content: center;
}
  .icon_block {
    margin: 1rem 0;
    text-align: center;
  }
  .icons {
    width: 100px;
    height: 100px;
    background-color: orange;
  }
`;
const CategoryBlock = ({ type }) => {


  let iconComponent;

  switch (type) {
    case 'cleaning':
      iconComponent = <MdCleaningServices className="icons" />;
      break;
    case 'photography':
      iconComponent = <MdCameraAlt className="icons" />;
      break;
    case 'maintenance':
      iconComponent = <MdBuild className="icons" />;
      break;
    case 'assignments':
      iconComponent = <MdAssignment className="icons" />;
      break;
      case 'all':
        iconComponent=null;
        break;
    default:
      iconComponent = null; // You can set a default icon or handle the case when the type is not recognized.
  }

  return (
    <Wrapper>
      <div className="main_block">
        <div className="icon_block">
          <i className="icon">{iconComponent}</i>
        </div>
        <div className="category_name">
          <h1>{type}</h1>
        </div>
        <div className="category_description">Lorem ipsum dolor sit amet consectetur</div>
      </div>
    </Wrapper>
  );
};

export default CategoryBlock;
