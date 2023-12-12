import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


import "./EdForm.css";
const EDForm= () => {
  const [values, setValues] = useState({
    firstname: "",
    lasttname: "",
    phone: "",
    email: "",
    service: "",
    zipcode: "",
    message: "",
  });
  const [fnameErr, setFNameErr] = useState(false);
  const [lnameErr, setLnameErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [serviceErr, setServiceErr] = useState(false);
  const [zipcodeErr, setZipcodeErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);
  const [fnameErrorMsg, setfNameErrorMsg] = useState("");

  const { firstname, lasttname, phone, email, service, zipcode, message } =
    values;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !firstname ||
      !lasttname ||
      !phone ||
      !email ||
      !service ||
      !zipcode ||
      !message ||
      fnameErr ||
      lnameErr ||
      phoneErr ||
      emailErr ||
      serviceErr ||
      zipcodeErr ||
      messageErr
    ) {
      toast.error("Please enter the required data for each input field", {
        theme: "colored",
      });
    } else {
     
      setValues({
        firstname: "",
        lasttname: "",
        phone: "",
        email: "",
        service: "",
        zipcode: "",
        message: "",
      });
      toast.success(
        "Thanks for your Interest😃. We Will contact you soon 📧📱!",
        {
          theme: "colored",
        }
      );
    }
  };
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  // -----------------------------------FirstName Validation Rules
  const fnameValidation = () => {
    if (firstname.length < 3) {
      setFNameErr(true);
      setfNameErrorMsg("Please Enter A valid name");
    } else if (!/^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/.test(firstname)) {
      setFNameErr(true);
      setfNameErrorMsg("Name must contain only alphabetic characters");
    } else {
      setFNameErr(false);
    }
  };
  // ---------------------------------LastName validation rules
  const lnameValidation = () => {
    if (lasttname.length < 3) {
      setLnameErr(true);
    } else setLnameErr(false);
  };
  // ---------------------------------Phone validation rules
  const phoneValidation = () => {
    if (!/^[0-9]{10,12}$/.test(phone)) {
      setPhoneErr(true);
    } else setPhoneErr(false);
  };
  // ---------------------------------emailValidation rules
  const emailValidation = () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailErr(true);
    } else setEmailErr(false);
  };
  // ---------------------------------serviceValidation rules

  const serviceValidation = () => {
    if (!/^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/.test(service)) {
      setServiceErr(true);
    } else if (service.length < 5) {
      setServiceErr(true);
    } else setServiceErr(false);
  };
  // ------------------------------zip code validation rules
  const zipCodeValidation = () => {
    if (zipcode.length != 3) {
      setZipcodeErr(true);
    } else setZipcodeErr(false);
  };
  // ------------------------------Message validation rules
  const messageValidation = () => {
    if (message.length < 20) {
      setMessageErr(true);
    } else setMessageErr(false);
  };
  return (
    <div className="container-fluid contact" id="contact">
      <ToastContainer
        // toastStyle={{ backgroundColor: "crimson" }}
        position="top-center"
      />
      <div className=" text-center">
        <small className="text-uppercase fw-bold des text-muted">
          we answer within 24 hours
        </small>
        <div className=" fw-bold font-heading">Contact</div>
        <div className="row d-flex align-items-center justify-content-center  ">
          <div className="col-lg-7 ">
            <form onSubmit={handleSubmit}>
              <div className="row formerr">
                <div className="col-md-6 mt-4  text-start">
                  <label className="des text-muted text-uppercase fw-bold">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    onChange={(e) => {
                      fnameValidation();
                      handleInputChange(e);
                    }}
                    value={firstname}
                  />
                  {fnameErr && <p>{fnameErrorMsg} </p>}
                </div>
                <div className="col-md-6 mt-4  text-start">
                  <label className="des text-muted text-uppercase fw-bold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lasttname"
                    onChange={(e) => {
                      lnameValidation();
                      handleInputChange(e);
                    }}
                    value={lasttname}
                  />
                  {lnameErr && <p>Please Enter a valid last name </p>}
                </div>
                <div className="col-md-6 mt-4 text-start">
                  <label className="des text-muted text-uppercase fw-bold">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    onChange={(e) => {
                      phoneValidation();
                      handleInputChange(e);
                    }}
                    value={phone}
                  />
                  {phoneErr && <p>Phone number must be 11 digits long </p>}
                </div>
                <div className="col-md-6 mt-4  text-start">
                  <label className="des text-muted text-uppercase fw-bold">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={(e) => {
                      emailValidation();
                      handleInputChange(e);
                    }}
                    value={email}
                  />
                  {emailErr && <p>Please Enter a valid Email </p>}
                </div>
                <div className="col-md-6 mt-4  text-start ">
                  <label className="des text-muted text-uppercase fw-bold">
                    Enter the required service
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="service"
                    onChange={(e) => {
                      serviceValidation();
                      handleInputChange(e);
                    }}
                    value={service}
                  />
                  {serviceErr && <p>Please Enter a valid Service </p>}
                </div>
                <div className="col-md-6 mt-4  text-start ">
                  <label className="des text-muted text-uppercase fw-bold">
                    your zip code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="zipcode"
                    onChange={(e) => {
                      zipCodeValidation();
                      handleInputChange(e);
                    }}
                    value={zipcode}
                  />
                  {zipcodeErr && <p>Enter Your 4-digits Zip Code! </p>}
                </div>
                <div className=" mt-4  text-start ">
                  <label className="des text-muted text-uppercase fw-bold">
                    Message
                  </label>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      onChange={(e) => {
                        messageValidation();
                        handleInputChange(e);
                      }}
                      value={message}
                    />
                    {messageErr && (
                      <p>Message must contain more then 15 characters </p>
                    )}
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-lg text-white esti-btn text-uppercase py-4 px-5 mt-3 mb-5 fw-bold"
                  >
                    send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EDForm;
