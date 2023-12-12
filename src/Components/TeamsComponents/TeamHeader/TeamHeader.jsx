import React from "react";
import "./TeamHeader.css";

function TeamHeader() {
  return (
    <div className="container-fluid TbgSet">
      <div className="container">
        <div className="hero-text my-5 ">
          <div className="text-size hero-text-clr fw-bold text-capitalize pt-5">
            We Are Co-Founders, Early Stage EdTech Operators and Investors
          </div>
          <p className="w-sm-75 w-100 mt-4 fs-5 paras pb-5">
            EdTech ventures was created by Ed Sattar, a workforce development
            evangelist and founder of several EdTech companies with experience
            in startup to scaleups leading them to successful exits.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamHeader;
