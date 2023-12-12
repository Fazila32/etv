import React from "react";
import "./ShortCourse.css";
import girl from "../../images/businessWo.png";
import { AiFillStar } from "react-icons/ai";
import HubSpotForm from "../HubSpotForm/HubSpotForm";
function ShortCourses() {
  return (
    <div className="container-fluid mt-5 position-relative">
      <div className="row me-5 mb-5">
        <div className="col-12 col-lg-6 ms-md-auto  mx-5 girl-content">
          <div className="fs-1 hero-text-clr text-capitalize fw-bold">
            Centering Micro Credentialing Programs Valued Around Career
            Trajectory
          </div>
          <div className="fs-5 my-4 paras">
            In a survey conducted on professional advancement, employees'
            priorities and objectives emerged as follows:
          </div>
          
          {/* ............... */}
          <div className="mt-3 mb-5">
            <div className="p scnd-bg py-2 px-3 fs-5 text-capitalize cal1">
              <span className="fw-bold">31%</span> Raise in Salary.
            </div>
            <div className="p scnd-bg py-2 px-3 fs-5 text-capitalize cal2 mt-2">
              <span className="fw-bold">32%</span> Promotion in Job.
            </div>
            <div className="p scnd-bg py-2 px-3 fs-5 text-capitalize cal3 mt-2">
              <span className="fw-bold">35%</span> Entry into New industry.
            </div>
            <div className="p scnd-bg py-2 px-3 fs-5 text-capitalize cal4 mt-2">
              <span className="fw-bold">38%</span> feel more confident
              amongest peers.
            </div>
            <div className="d-flex align-items-center">
              <div className="p calcs2 py-2 px-3 fs-5 cal5 mt-2">
                <span className="fw-bold">41%</span> New Job and Career Path 
.
              </div>
              <AiFillStar className="star ms-2 ms-md-3" size={40} />
            </div>
          </div>

          <HubSpotForm />
          {/* <div className="btn btn-lg info-btn px-4 ">Request More Info</div> */}
        </div>
      </div>
      <div className="position-absolute image-ps d-none d-lg-block">
        <img src={girl} alt="" className="imgw2 image-fluid" />
      </div>
    </div>
  );
}

export default ShortCourses;
