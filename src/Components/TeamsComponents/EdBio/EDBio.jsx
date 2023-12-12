import React from "react";
import "./EdBio.css";
import EdStar from "../../../images/ed.jpg";
import clyde from "../../../images/clyde.jpeg";
import david from "../../../images/david.jpg";
import { Link } from "react-router-dom";
import { AiOutlineLinkedin } from "react-icons/ai";

const EdBio = () => {
  const perso = [
    {
      id: 1,
      icon: (
        <img
          src={david}
          alt="AltPerso"
          className="img-fluid imageSet"
          width="200"
        />
      ),
      Name: "David Mantica ",
      details:
        "David has 20 plus years of experience in the technical training space. As a president and founder, he has led product management, marketing and enterprise sales in technical training & workforce development organizations.",
      linkedIn: "https://www.linkedin.com/in/david-mantica/",
    },
    {
      id: 2,
      icon: (
        <img
          src={clyde}
          alt="AltPerso"
          className="img-fluid imageSet"
          width="200"
        />
      ),
      Name: "Clyde Seepersad ",
      details:
        "Clyde has a deep track record of growing both the top and bottom line of emerging businesses by combining strategic acumen, analytical mindset, action orientation, strong people skills and a fast learning curve." ,
      linkedIn: "https://www.linkedin.com/in/clydeseepersad/",
    },
  ];
  return (
    <div className="container-fluid px-0 mt-5">
      <div className="container">
        <div className="fs-1 head-text text-capitalize fw-bold text-center ">
          ED's Bio
        </div>
        <div className="row mt-5">
          <div className="col-12 col-sm-5 ">
            <div className="Ed">
              <img src={EdStar} alt="" className="imgr " />
            </div>
          </div>
          <div className="col-12 col-sm-7">
            <div className="text-border px-3 mx-3 mx-sm-0">
              <p className="fs-5 paras">
                Ed Sattar has been nominated for the Ernst & Young Entrepreneur
                of the Year award three times and was among the top seven
                finalists in 2009. He has appeared on the Deloitte Fast 50 as
                the leader of the 6th fastest growing company in Texas , was
                awarded the economic engine award by Greater Austin Chamber of
                Commerce Award, ranked 31st among the top 50 CEO for SMB by USA
                Today on August 2019 , nominated as the best CEO 2019 by ABJ ,
                was featured in CEO Monthly and got the companies listed in Inc
                5000 several times as one of the fastest growing companies under
                his leadership.
              </p>
            </div>
            <div className=" mt-5 fs-5 paras mx-3 mx-sm-0">
              Sattar has invested 20 years in the elearning industry and made
              significant contributions across multiple industries. His
              experiences include building companies and innovating in how to
              convert training into high impact personalize learning experience
              for a modern learner. He has developed a unique proprietary
              Instructional Delivery Methodology called QS Learn and embedded
              into industry first cognitive learning platform CLIPP which is
              based on artificial intelligence. During his tenure, he has
              identified key criteria and e-learning compliance standards that
              are currently being published and implemented.
            </div>
          </div>
        </div>
      </div>
      <div className="light-bg m-0 py-5 my-5 container-fluid">
        <div className="container">
          <div className="row">
            {perso.map((PersoIn) => (
              <div className="col-12 col-md-5 ms-md-5 cardS p-2 my-5">
                <div className="col-10 col-md-7 m-auto text-center">
                  <div className="  mt-2">{PersoIn.icon}</div>
                </div>
                <div className="col-12 my-2 px-3 text-center">
                  <div className="fs-3 fw-bold title">{PersoIn.Name}</div>
                  <div className="fs-5 mt-2 text-justify ">
                    {PersoIn.details}
                  </div>
                  <Link to={PersoIn.linkedIn} target="_blank">
                    <div className="btn ">
                      <AiOutlineLinkedin
                        size={50}
                        className="mt-3 p-2 btn-I"
                      ></AiOutlineLinkedin>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EdBio;
