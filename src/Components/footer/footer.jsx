import React, { useState } from "react";
import "./footer.css";
import logo from "../../images/edtech2.png";
import { TbWorld } from "react-icons/tb";
import {Link} from "react-router-dom"
const Footer = () => {
 

  return (
    <div className="footer py-5">
    
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-12 col-md-4 pe-3">
            <div>
            <Link to="./" target="_blank">
              <img src={logo} width={150} />
            </Link> 
            </div>
            <div className="my-3 fs-5 mx-4 mx-md-0">
            Committed to innovating & investing in Workforce Development business models that are mapping skill gaps to emerging job roles and increasing ROI in education

            </div>
          
            
          </div>
          <div className="col-12 col-md-4 ps-md-5 mt-3 mt-md-0">
            <h6 className="fs-5 ">Quick Links </h6>
            <ul className="fs-5  ps-0">
            
              <li><Link to="./" target="_blank">
              Home
     </Link></li>
              <li><Link to="./team" target="_blank">
              Team
     </Link></li>
              <li><Link to="./strategy" target="_blank">
              Strategy
     </Link></li>
              <li>Social Impact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mt-3 mt-md-0">
            <h6>Contact Info</h6>
            <div className="fs-5"> Email:</div>
            inquires@edtechventures.com
          </div>
        </div>
        <hr></hr>
        <div className="text-center  fs-5">
          <TbWorld size={20}></TbWorld>
          &nbsp; <i>EdTech</i> Ventures. All Rights <i>Reserved</i> 
        </div>
      </div>
    </div>
  );
};
export default Footer;
