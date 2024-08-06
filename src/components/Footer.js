import React from "react";
import "./footer.css";
import "../App.css";

const Footer = () => {
  const scrolltoconv = () => {
    window.scrollTo(0, 650);
  };
  const scrolltoabout = () => {
    window.scrollTo(0, 980);
  };
  return (
    <>
      <div class="ftr">
        <footer className="py-3"></footer>
        <footer>
          <div className="container text-center">
            <div class="row">
              <div class="col-3">
                <h4 className="heading-footer">Contact Us</h4>
                <div class="footer-text d-flex flex-column">
                  <p>abhideep.2004.3@gmail.com</p>
                  <p>+91-7801002139</p>
                  <a href="https://abhideep03.github.io/myportfolio/">
                    Portfolio Website
                  </a>
                </div>
              </div>
              <div class="col-3">
                <h4 className="heading-footer">Visit</h4>
                <div className="footer-links d-flex flex-column">
                  <a href="https://github.com/abhideep03">GitHub</a>
                  <a href="https://www.linkedin.com/in/abhideep-mandapati-/">
                    LinkedIn
                  </a>
                </div>
              </div>
              <div class="col-3">
                <h4 className="heading-footer">Social</h4>
                <div className="footer-links d-flex flex-column">
                  <a href="https://instagram.com/abhideep03_">Instagram</a>
                  <a href="https://x.com/abhipinkman">Twitter</a>
                </div>
              </div>
              <div class="col-2">
                <h4 className="heading-footer"> Quick links</h4>
                <div className="footer-links d-flex flex-column">
                  <button onClick={scrolltoconv}>
                    <b>Convert Now</b>
                  </button>
                  <button onClick={scrolltoabout}>
                    <b>About Us</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <footer className="py-3">
          <div class="container">
            <div class="row ">
              <div class="col-12">
                <p className="text-center mb-0">
                  &copy;{new Date().getFullYear()}: Speech To Text. All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
