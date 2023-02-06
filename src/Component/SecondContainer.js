import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/css/second-container.css";
import img3 from "../assets/images/Group 300.jpg";
import img1 from "../assets/images/Group 65.jpg";
import ArrowRight from '../assets/images/right_arrow.png'

function Secondcontainer() {
  return (
    <>
      <section class="discounts-section">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="row reorder align-items-center justify-content-between">
              <div id="side_panel" class="col-md-6 col-lg-5">
                <div class="discount-heading">
                  <h2 class="h2 heading-h2">
                    <span className="green-heading-two heading-data">We connect clients and Legal Consultants</span> in one platform.
                  </h2>
                  <p class="p">
                    Make an appointment with Advocates and Legal consultancy, Today! or chat with a lawyer online for free in Dubai and across UAE now. We provide legal Services by connecting you with the Legal Consultants, Or you can even hire a Lawyer for your Legal issues. You can also read our blogs which provides some of the vital informations.
                  </p>
                  <div className='button_and_arrow hover-zoom'>
                    <button className='green_btn'>Contact now</button>
                    <span className='button_arrow_handle' ><img src={ArrowRight} /></span>
                  </div>
                </div>
              </div>
              <div id="mainContentRight" class="col-md-6">
                <img class="discounts-img hover-zoom" src={img3} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Secondcontainer;
