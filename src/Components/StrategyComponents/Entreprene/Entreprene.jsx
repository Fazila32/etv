import React from "react";
import "./Entreprene.css";
import step from "../../../images/steps.png";
const Enterprene = () => {
  const steps = [
    {
      id: 1,
      heading: "1. Build your company ",
      details:
        "With repeat EdTech founders who have the playbook from startup to scale up and taking organizations all the way to a successful exit ",
      list: (
        <ul>
          <li className="custome">
            Our founders and leadership team have bootstrapped companies, raised
            capital and taken them to a successful exit- they know how to
            sequence investments and resources.
          </li>
          <li className="custome">
            If you have an idea, we will invest pre-seed capital, provide
            hands-on market research, access to advisory council members,
            provide insights, IP and refine your business model۔
          </li>
        </ul>
      ),
    },

    {
      id: 2,
      heading: "2. Speed to Market with Product & Market Fit",

      list: (
        <ul>
          <li className="custome">
            We will provide a Learning Experience Platform and the ability to
            curate content.
          </li>

          <li className="custome">
            We can quickly assemble a team of fractional / shared leadership
            resources in the areas of Technology, Marketing and Product
            Management & Development
          </li>
          <li className="custome">
            Our objective is to get your MVP out and help you prove the business
            model
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      heading: "3. Fundraising ",

      list: (
        <ul>
          <li className="custome">We will fund your EdTech Startup.</li>
          <li className="custome">
            We will provide you with corporate governance templates and models.
          </li>
        </ul>
      ),
    },

    {
      id: 4,
      heading: "4. Operating Framework",

      list: (
        <ul>
          <li className="custome">
            We collectively work with the leaders of each of the portfolio
            companies and continue to build and update Playbooks in the Areas of
            Marketing, Sales, Product Development and Operations - this is our
            crown jewel which we will share with you to fuel growth and reduce?
            (should that be increase?) speed to market
          </li>
          <li className="custome">
            Successful companies that make least number of mistakes - We have a
            huge Not To Do List – its more important to have “Not To Do List”
            compared to “To Do List{" "}
            <i>
              change to: Highly successful companies prioritize minimizing
              mistakes and maintain a substantial "Not To Do List."Emphasizing
              the significance of such a list, they understand that it is more
              crucial than the traditional "To Do List."
            </i>
          </li>
        </ul>
      ),
    },
    {
      id: 5,
      heading:
        "5. Access to Talent and Domain Specific Advisory Council Members",

      list: (
        <ul>
          <li className="custome">
            Over the past 20 years, we have built relationships and have access
            to talented people with deep expertise in workforce and professional
            development in various industries.
          </li>
        </ul>
      ),
    },
  ];
  return (
    <div className="container-fluid text-center light-bg">
      <div className=" m-auto py-5  w-75 ">
        <div className="fs-1 hero-text-clrtext-capitalize fw-bold text-center m-auto w-75">
          Start your EdTech Entrepreneurial Journey with Us
        </div>
        <p className="mt-4 fs-5 paras">
          If you have an EdTech idea and deep expertise in any area of (take out
          the) workforce development & education, we want to learn and put a
          heartbeat into your ideas, vision, and accelerate growth by enabling
          you with speed to market.
        </p>
      </div>
      <div className="container m-auto row d-flex align-items-center jutify-content-between">
        <div className="row d-flex justify-content-center">
          {steps.map((enter) => (
            <div className="col-md-5 enter-cards m-4 p-3">
              <div className="fs-4 text-center fw-bold hero-text-clr">{enter.heading}</div>
              <p className="paras">{enter.details}</p>
              <div className="fs-6 paras">{enter.list}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Enterprene;
