import React from "react";
import "./PfLeaders.css"
import faisal from "../../../images/faisal.jpg";
import bryan from "../../../images/bryan-kenna.jpg";
import iec from "../../../images/iec.PNG";
import enableU from "../../../images/enablu-removebg-preview.png";
import ht from "../../../images/ht.PNG";
import qs from "../../../images/qs.PNG";
import factor from "../../../images/360f.PNG";
import alm from "../../../images/bryanAlm.jpg"
import suzan from "../../../images/suzan.jpg"
import shamsha from "../../../images/shamsha.png"
import chris from "../../../images/chris.jpeg"
import carl from "../../../images/carl.jpg"
import Wf from "../../../images/workf.PNG"
import { Link } from "react-router-dom";
import { AiOutlineLinkedin } from "react-icons/ai";
const PfLeaders = () => {
  const portfolioLeaders = [
    {
      id: 1,
      name: "Bryan Kenna",
      linkedin: "https://www.linkedin.com/in/bryankenna/",
      clogo: <img src={qs} alt="company logo" className="img-fluid " width={150} />,
      pic: <img src={bryan} alt="AltPerso" className="img-fluid leaderImg"/>,
    },
    {
      id: 3,
      name: "Carl McCauley",
      linkedin: "https://www.linkedin.com/in/carlmccauley/",
      clogo: <img src={factor} alt="company logo" className="img-fluid "  width={150} />,
      pic: <img src={carl} alt="AltPerso" className="img-fluid leaderImg" />,
    },
    {
      id: 4,
      name: "Faisal Khawaja",
      linkedin: "https://www.linkedin.com/in/faisal-khwaja-66607115/",
      clogo: "Fractional CTO across all the portfolio companies",
      pic: <img src={faisal} alt="AltPerso" className="img-fluid leaderImg" />,
    },
    {
      id: 5,
      name: "Chris Lofton",
      linkedin: "https://www.linkedin.com/in/chris-lofton-83997431/",
      clogo: <img src={Wf} alt="company logo" className=""  width={150} />,
      pic: <img src={chris} alt="AltPerso" className="img-fluid leaderImg" />,
    },
    {
      id: 6,
      name: "Shamsah Noorani",
      linkedin: "https://www.linkedin.com/in/shamsah-noorani-6aba5a169/",
      clogo: <img src={ht} alt="company logo" className="img-fluid" width={100}  />,
      pic: <img src={shamsha} alt="AltPerso" className="img-fluid leaderImg" />,
    },
    {
      id: 7,
      name: "Brian Lambert",
      linkedin: "https://www.linkedin.com/in/brianlambert/",
      clogo: <img src={enableU} alt="company logo" className="img-fluid" width={150}  />,
      pic: <img src={alm} alt="AltPerso" className="img-fluid leaderImg" />,
    },
  ];
  return (
    <div className="container-fluid  pf">
      <div className="container py-5 mt-5">
        <div className="fs-1 hero-text-clr text-capitalize fw-bold text-center ">
          Our Portfolio Company Leaders
        </div>
        <div className="row mt-5 text-center align-items-center ">
          {portfolioLeaders.map((leader) => (
            <div class="col-md-4 col-sm-6 px-3 my-3  ">
              <div>{leader.pic}</div>
              <div className="fs-3 title fw-bold">{leader.name}</div>
              <div className="d-flex align-items-center justify-content-center bg-white social p-0">
                <Link to={leader.linkedin} target="_blank">
                  <div className="btn ">
                    <AiOutlineLinkedin
                      size={50}
                      className="p-2 btn-I"
                    ></AiOutlineLinkedin>
                  </div>
                </Link>
                <div> {leader.clogo}</div>
              </div>
              
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};
export default PfLeaders;
