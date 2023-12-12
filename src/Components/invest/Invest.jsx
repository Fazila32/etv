import React from "react";
import "./Invest.css";
import percen from "../../images/perc.png";
import { FaGreaterThan } from "react-icons/fa";
import boy from "../../images/boy.png"; 
function Invest() {
  return (
    <div className="container-fluid inv">
      <div className="row ">
        <div>
          <div className="fs-2 text-capitalize  text-center mt-5 hero-text-clr fw-bold px-2">
            We Invest in EdTech Companies Solving
          </div>
          <div className="fs-2 text-capitalize  text-center hero-text-clr fw-bold px-2">
            Educational Problems Based on the Following
          </div>
          <div className=" mt-5">
            <div className="container ">
              <div className="fs-2 head-clr fw-bold text-center text-lg-start">
                Students Financial Expenditure
              </div>
              <div className="row invest-top std-financs d-flex flex-lg-row flex-column justify-content-center align-items-center mx-auto mx-md-2 mt-4">
                <div className="col-lg-3 col-5 ">
                  <img src={percen} alt="" className="img-fluid" width={250} />
                </div>
                <div className="col-lg-5 col-10 mt-3 paras text-center text-lg-start">
                  <p className="fs-7">
                    78% of students indicate that their degree, certificate, or
                    bootcamp program will be the most important financial
                    investment they will undertake
                  </p>
                  <p className="fs-5">
                  The WEF projects 50% of all jobs will require a change of skillset by 2027

                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ............. 2nd section.........*/}
           <div className="mt-5 py-5 scnd-sec light-bg hero-text-clr">
            <div className="container">
              <div className="fs-2 text-capitalize">
                Facilitating the shift from traditional
              </div>
              <div className="fs-2 text-capitalize">
                to non traditional career
              </div>
              <div className="   invest-top d-flex align-items-center">
                <div className="row ps-3">
                  <div className="col-lg-10 col-12">
                    <p className=" mt-3 fs-5 paras">
                      The preference of internet searchers are shifting from traditional degreed pathways to non-traditional approaches, including short certifications and bootcamps.

                    </p>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                      <div>
                        <div className="fs-3 fw-bold mt-4">2020</div>
                        <div className=" mt-1  btns-set d-flex flex-column align-items-center">
                          <div className="btn btn-2 text-white btn-lg fw-bold  text-capitalize">
                            47% non-traditional
                          </div>

                          <div className="btn btn-2  text-white btn-lg mt-4 fw-bold  text-capitalize">
                            53% traditional
                          </div>
                        </div>
                      </div>
                      <div className="cline d-none d-md-block"></div>
                      {/* ......... */}
                      <div>
                        <div className="fs-3 fw-bold mt-4">2022</div>
                        <div className=" mt-1 btns-set d-flex flex-column align-items-center">
                          <div className="btn btn-2 text-white btn-lg fw-bold text-capitalize">
                            52% non-traditional
                          </div>

                          <div className="btn btn-2  mt-4 text-white btn-lg fw-bold  text-capitalize">
                            48% traditional
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ........... */}
                    <div className="d-flex align-items-center mt-4">
                      <div className="fs-1  d-flex align-items-center me-4 fw-bold">
                        
                        <FaGreaterThan />
                        50%
                      </div>
                      <div className="fs-5 fw-bold text-capitalize me-5 paras">
                        
                        of degree searches in 2022 are now for non-traditional
                        pathways
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div className=" set-pic ">
        <img src={boy} className="image-fluid imgw d-none d-lg-block"></img>
      </div>
    </div>
  );
}

export default Invest;
