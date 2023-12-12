import React from "react";
import "./TeamMembers.css"
import ed from "../../../images/altb.jpg"
import michle from "../../../images/michelle.jpeg"
import laura from "../../../images/youngblom.jpeg"
import ken from "../../../images/kenn.jpeg"
import bret from "../../../images/bret.jpeg"
import { Link } from "react-router-dom";

import {AiOutlineLinkedin} from "react-icons/ai"
const TeamMembers =()=>{
    const adCouncil = [
        {
          id: 1,
          icon: <img src={michle} alt="AltPerso" className="img-fluid"/>,
          Name: "Michelle Sims ",
          details:"A passionate advocate for economic stability, women's empowerment, and workplace equality. With a strong background in volunteer and philanthropic work.",
          linkedIn:"https://www.linkedin.com/in/michellesims-/"
        },
        {
          id: 2,
          icon: <img src={laura} alt="AltPerso" className="img-fluid"/>,
          Name: "Laura Youngblom  ",
          details:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          linkedIn:"https://www.linkedin.com/in/laura-youngblom-13692342/"
        },
        {
            id: 3,
            icon: <img src={ken} alt="AltPerso" className="img-fluid"/>,
            Name: "Ken Ramirez",
            details:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            linkedIn:"https://www.linkedin.com/in/keneramirez/"
          },
          {
            id: 4,
            icon: <img src={bret} alt="AltPerso" className="img-fluid"/>,
            Name: "Bret Sanders",
            details:" An enthusiastic and competitive individual with strong leadership, sales, business development, fundraising and operations background.",
            linkedIn:"https://www.linkedin.com/in/brettsander/"
          },
        ]
    return(
        <div className="container my-5">
        <div className="fs-1 head-text text-capitalize fw-bold text-center ">
        Our Advisory Council
      </div>
        <div className="row my-5 ">
        {adCouncil.map((council) => (
              <div class="col-sm-6 col-lg-3 px-3 py-4 d-flex justify-content-center">
              <div class="card p-0 ">
                  <div className="card-image">
                     {council.icon}
                  </div>
                  
                  <div class="card-content d-flex flex-column align-items-center">
                        <h4 class="pt-2">{council.Name}</h4>
                        <h5 className="px-2">{council.details}</h5>
                        <Link to={council.linkedIn} target="_blank">
        <div className="btn "><AiOutlineLinkedin size={50} className="mt-3 p-2 btn-I"></AiOutlineLinkedin></div>
      </Link>
                    </div>

                  </div></div>          
                        
                        ))}
           
        </div>
    </div>
    )
}
export default TeamMembers;