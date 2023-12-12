import React from "react";
import "./StrategyMission.css";
import picture from "../../../images/missbg.jpg";

function StrategyMission() {
  return (
    <div className="container-fluid Smission">
      <div className="container my-5 ">
        <div className="d-flex flex-column justify-content-center align-items-center h-100  py-3 stra-mission">
          <div className="arrow ps-2 "></div>
          <div>
            <div className="fs-1 fw-bold head-text heaing hero-text-clr d-flex align-items-center ">
              Our Mission
            </div>
            <p className="mt-1 fs-5 paras">
              Our mission is very simple. We want to professionally and
              financially develop people who are founders and leaders of our
              portfolio companies as well as customers of our portfolio
              companies.
            </p>
          </div>
          <div className="arrow arrow2 ps-2"></div>
          <div className="  mt-2">
            <div className="fs-1 fw-bold head-text heaing  hero-text-clr d-flex align-items-center">
              Our Strategy
            </div>
            <p className="mt-1 fs-5 paras ">
              We invest in leaders and founders wo have deep domain expertise in
              workforce development and talent transformation.
            </p>
          </div>
        </div>
        {/* <div className="d-flex">
          <div className="left-content col-md-4 pe-5 mt-3">
            <div className="fs-1 head-text">
              Our Mission
            </div>
            <p >
              Our mission is very simple. We want professionally and financially
              develop people who are founders and leaders of our portfolio
              companies as well as customers of our portfolio companies.
            </p>
          </div>
          <div className="center-picture col-md-4"><img src={picture} alt="" className=" picture"/></div>
          <div className="right-content col-md-4 d-flex align-items-start flex-column justify-content-end"> 
          <div className="fs-1 head-text">
              
              Our Strategy
            </div>
            <p >
              We invest in leaders and founders wo have deep domain expertise in
              workforce development and talent transformation.
            </p></div>
        </div> */}
      </div>
    </div>
  );
}

export default StrategyMission;
