import React from 'react';
import './Topnav.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../images/edtech2.png"

// import {BsFacebook} from "react-icons/bs"
// import { FaLinkedinIn} from "react-icons/fa"

function TopNav() {
  return (
    <Navbar bg="white" expand="lg" >
      <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt="" width={150}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto px-5">
            <NavDropdown title="About Us" id="basic-nav-dropdown" className='mx-0 mx-lg-5 fs-5'>
              <NavDropdown.Item href="/team">Team</NavDropdown.Item>
              <NavDropdown.Item href="/strategy">
                Strategy
              </NavDropdown.Item>
              <NavDropdown.Item href="/advisory_council">
                Advisory Council
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Social Impact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Career With Us
              </NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Our Portfolio Companies" id="basic-nav-dropdown" className='fs-5'>
              <NavDropdown.Item href="https://www.quickstart.com/" target="blank">QuickStart</NavDropdown.Item>
              <NavDropdown.Item href="https://www.pacelearn.org/"  target="blank">
                PACE Learn
              </NavDropdown.Item>
              <NavDropdown.Item href="https://workforceinstitute.io/"  target="blank">WorkForce Institute</NavDropdown.Item>
              
              <NavDropdown.Item href="https://www.cloudinstitute.io/" target="blank">
                Cloud Institute
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.healthtechacademy.org/" target="blank">
                Health Tech Academy
              </NavDropdown.Item>
              <NavDropdown.Item href="https://enableu.com/" target="blank">
                EnableU
              </NavDropdown.Item>
              <NavDropdown.Item href="https://iec.org.pk/" target="blank">
                Institute of Emerging Careers
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.360factors.com/" target="blank">
                360Factors
              </NavDropdown.Item>
              
            </NavDropdown>
            
          </Nav>
          {/* <Nav.Link href="#" className='ms-auto'><BsFacebook size={30}/></Nav.Link>
          <Nav.Link href="#" className='ms-auto'><FaLinkedinIn size={30}/></Nav.Link> */}
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}


export default TopNav;