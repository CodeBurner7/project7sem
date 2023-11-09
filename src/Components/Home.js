//1
import React, { useContext, useState } from "react";
import { Appcontext } from "../Context/ServiceContext";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Categoryblock from "./Categoryblock";
import IndividualserviceBlock from "./IndividualserviceBlock";

const Wrapper1 = styled.section`
  display: flex;
  flex-wrap: wrap;
  // justify-content: center;
  // background-color:pink;

  .featured_services {
    width: 100%;
    // max-width: 900px; /* Adjust the max-width to your liking */
    // background-color:red;
    margin: 0 0 3rem 0;
  }

  .cate_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px; /* Adjust the gap between items to your liking */
    // background-color:orange;
    margin: 2rem 0;
  }
  .header {
    // background-color:green;
  }
`;
const Wrapper2 = styled.section`
  display: flex;
  flex-wrap: wrap;
  // justify-content: center;
  // background-color:pink;

  .recommended_services {
    width: 100%;
    // max-width: 900px;
    text-align: center;
    // background-color:red;
  }

  .services_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    // background-color:orange;
  }
`;
const Home = () => {
  const { myname, myage, services,services1,recommendedServices1 } = useContext(Appcontext);
  console.log(services1);

  //for featuredcategories
  var featuredCategories = new Set(
    services1.map((curElem, index) => {
      return curElem.category;
    })
  );
  var featuredCategories = [...featuredCategories, "All"];
  console.log(featuredCategories);


  return (
    <>
      <Wrapper1>
        <div className="featured_services">
          <h1 style={{ textAlign: "center" }} className="header">
            Featured Categories
          </h1>
          <div className="cate_list">
            {featuredCategories.map((curElem, index) => {
              return (
                <>
                  <Categoryblock type={curElem} />
                </>
              );
            })}
          </div>
        </div>
      </Wrapper1>

      <hr />

      <Wrapper2>
        <div className="recommended_services">
          <h1 style={{ textAlign: "center" }}>Recommended Services</h1>

          <div className="services_list">
            {recommendedServices1.map((curElem, index) => {
              return (
                <>
                  <IndividualserviceBlock key={curElem.id} {...curElem}/>
                </>
              );
            })}
          </div>
        </div>
      </Wrapper2>
    </>
  );
};

export default Home;




















