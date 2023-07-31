import React from 'react'

import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div style={{ marginTop: "150px" }} id={"footer"}>
        <div className={"container"} align="center">
          <div className={"row"}>
            <div className={"col-sm-12 col-md-12 col-lg-4 text-white"}>
              <h3>About Us</h3>
              <p className={"text-start"}>
                At Pizza App, we're passionate about creating the perfect pizza
                experience for our customers. From our fresh ingredients to our
                speedy delivery, we strive to exceed your expectations every
                time. Order now and taste the difference!
              </p>
              <p className={"mt-3 text-start"}>
                This website is Developed by Muhammad Ehtesham Rajpot
              </p>
            </div>
            <div
              className={
                "col-sm-12 col-md-12 col-lg-4 text-white mt-sm-4 mt-lg-0"
              }
            >
              <h3>Newsletter</h3>
              <p>Stay Update with our latest</p>
              <div className={"input-group"}>
                <input
                  type={"text"}
                  className={"form-control py-2"}
                  placeholder={"Enter Email"}
                />
                <div className={"input-group-append"}>
                  <span className={"input-group-text py-2"}>
                    <a
                      href={"#"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Submit
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div
              className={
                "col-sm-12 col-md-12 col-lg-4 text-white mt-sm-4 mt-lg-0"
              }
            >
              <h3>Follow Us</h3>
              <p>Let us be social</p>
              <a href="#" className={"text-white"}>
                <FaFacebook />
              </a>
              <a href="#" className={"text-white ms-3"}>
                <FaTwitter />
              </a>
              <a href="#" className={"text-white ms-3"}>
                <FaInstagram />
              </a>
              <a href="#" className={"text-white ms-3"}>
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer