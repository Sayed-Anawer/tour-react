import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className=" footer">
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-warning">Tours Club</h1>
              <h6 className="list-unstyled">
                <li>Belong Anywhere</li>
              </h6>
            </div>
            <div className="col">
              <h4>Tours Service</h4>
              <ui className="list-unstyled">
                <li>Basic Dental Checkup</li>
                <li>Dental Heath consulting</li>
              </ui>
            </div>
            <div className="col">
              <h4>Follow us On</h4>
              <ui className="list-unstyled">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>GitHub</li>
              </ui>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Sayed Anawer | © All rights
              reserved | Terms Of Service || Privacy 2021.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
