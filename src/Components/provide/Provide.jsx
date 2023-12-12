import React from "react";
import "./Provide.css";
import eduBoy from "../../images/edu.png";
import linkedin from "../../images/li.png";
import coursera from "../../images/Coursera.png"
import udemy from "../../images/udemy.png"
import plural from "../../images/pluralsight.png"
function Provide() {
  return (
    <div className="container-fluid provide pt-5 position-relative">
      <div>
        <div className="fs-1 text-white fw-bold text-center text-capitalize ">
          They are looking to you to provide these
        </div>
        <p className="text-capitalize text-white mt-5 w-75 mx-auto text-center">
          When polled “Which online short course or certificate program and
          bootcamp providers are you considering?”, it was clear that university
          programs top the consideration list amongst other providers{" "}
          <span className="fw-bolder">(56%)</span>.
        </p>
        <div className="text-center mt-1">
          <img src={eduBoy} alt="" className="  hImg" />
        </div> 
      </div>
      <div>
        <div className="circle c-1 d-flex justify-content-center align-items-center flex-column display-absolute">
          <div className="fs-2 fw-bold">56%</div>
          <p className="fs-5 text-capitalize ">univertsity program</p>
        </div>

        <div className="circle c-2 d-flex justify-content-center align-items-center flex-column display-absolute">
          <img src={linkedin} alt="" width={180} />
          <div className="fs-4 fw-bold">29%</div>
        </div>
        <div className="circle c-3 d-flex justify-content-center align-items-center flex-column display-absolute">
          <img src={coursera} alt="" width={160} />
          <div className="fs-4 fw-bold">25%</div>
        </div>
        <div className="circle c-4 d-flex justify-content-center align-items-center flex-column display-absolute">
          <img src={udemy} alt="" width={120} />
          <div className="fs-4 fw-bold">19%</div>
        </div>
        <div className="circle c-4 d-flex justify-content-center align-items-center flex-column display-absolute">
          <img src={udemy} alt="" width={120} />
          <div className="fs-4 fw-bold">19%</div>
        </div>
        <div className="circle c-4 d-flex justify-content-center align-items-center flex-column display-absolute">
          <img src={udemy} alt="" width={120} />
          <div className="fs-4 fw-bold">19%</div>
        </div>
        <div className="circle c-5 d-flex justify-content-center align-items-center flex-column display-absolute">
          <img src={plural} alt="" width={140} />
          <div className="fs-4 fw-bold">10%</div>
        </div> 
      </div>
    </div>
  );
}

export default Provide;
