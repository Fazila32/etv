import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./HeroSection.css";
import enableU from "../../images/enablu-removebg-preview.png";
import ht from "../../images/ht.PNG";
import qs from "../../images/qs.PNG";
import factor from "../../images/360f.PNG";
import Wf from "../../images/workf.PNG"
import { Link } from "react-router-dom";

function Hero() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container-fluid bgSet">
      <div className="container">
        <div className="hero-text hero-text-clr">
          <div className=" fw-bold text-uppercase   ">
            <div className=" text-size1 darkO-txt mt-4"> EdTech Ventures</div> 
            <div className="text-size2">
          is a Venture Studio <div><span className="paras">Funding and Growing</span> <span className="darkO-txt ">EdTech Startups </span> </div></div>


          </div>
          <p className=" w-sm-75 w-100 mt-4 fs-5 paras ">Committed to innovating & investing in Workforce Development business models that are mapping skill gaps to emerging job roles and increasing ROI in education.</p>
{/* <div className='d-flex justify-content-center justify-content-sm-start'>  */}
<div className="btn btn-lg hr-btn text-white px-3 px-lg-5 py-1 py-lg-2 mb-5 " onClick={handleShow}>Learn More</div></div>
        {/* </div> */}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className='darkO-txt fw-bold'>
          <Modal.Title className='darkO-txt'>Our Portfolio Companies</Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-4'>
<div className='d-flex flex-wrap justify-content-center  align-items-center'>
<Link to="https://enableu.com/" target="_blank"><img src={enableU} alt="" className="img-fluid img-brdr" width={150}/></Link>

<Link to="https://www.healthtechacademy.org/" target="_blank"><img src={ht} alt="" className="img-fluid img-brdr " width={130} /></Link>

<Link to="https://www.quickstart.com/" target="_blank">
<img src={qs} alt="" className="img-fluid img-brdr" width={130}/>
</Link>
<Link to="https://workforceinstitute.io/" target="_blank"><img src={Wf} alt="" className="img-fluid img-brdr " width={130} /></Link>

<Link to="https://www.360factors.com/" target="_blank"><img src={factor} alt="" className="img-fluid img-brdr " width={150}/></Link>


</div>

        </Modal.Body>
      </Modal>
      </div>
      
    </div>
  );
}

export default Hero;
