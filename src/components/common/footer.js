import React from "react";
import "../../scss/index.scss";

const Footer = () => {
  return (
    <div className="ftr">
      <div className="ftr-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="d-none d-md-block">
                <div className="ftr-content-head">Sitemap</div>
                <div className="coloumn ">
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                    <div className="ftr-content-data">Home</div>
                  </div>
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                    <div className="ftr-content-data">Apparel</div>
                  </div>
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                    <div className="ftr-content-data">Accessories</div>
                  </div>
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                    <div className="ftr-content-data">Hampers</div>
                  </div>
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                    <div className="ftr-content-data">Wishlist</div>
                  </div>
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                    <div className="ftr-content-data">Shopping Bag</div>
                  </div>
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                    <div className="ftr-content-data">Contact Us</div>
                  </div>
                </div>
              </div>
              <div
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
                className="d-sm-block d-md-none"
              >
                <div role="tab" id="headingOne">
                  <div className="ftr-card-header">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                      className="ftr-content-head"
                    >
                      Sitemap
                    </a>
                  </div>
                </div>
                <div
                  id="collapseOne"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <div className="ftr-card">
                    <ul className="ftr-card-data">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">Apparel</a>
                      </li>
                      <li>
                        <a href="#">Accesories</a>
                      </li>
                      <li>
                        <a href="#">Hampers</a>
                      </li>
                      <li>
                        <a href="#">Wishlist</a>
                      </li>
                      <li>
                        <a href="#">Shopping Bag</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <div className="d-none d-md-block">
                <div className="ftr-content-head">Tranding Searches</div>
                <div className="coloumn ">
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                    <div className="ftr-content-data">
                      Launch of Gyanodaya Coffee Table Book
                    </div>
                  </div>
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                    <div className="ftr-content-data">
                      Enabling The Rural Youth To Grasp The
                    </div>
                  </div>
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                    <div className="ftr-content-data">
                      Gyanodaya: New Hopes for Kasturba Gandhi
                    </div>
                  </div>
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                    <div className="ftr-content-data">
                      Gyanodaya: Eckovation Join Hands with Ada
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
                className="d-sm-block d-md-none"
              >
                <div role="tab" id="headingOne">
                  <div className="ftr-card-header">
                    <a
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      className="ftr-content-head"
                    >
                      LATEST BLOGS
                    </a>
                  </div>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <div className="ftr-card">
                    <ul className="ftr-card-data">
                      <li>
                        <a href="#">Launch of Gyanodaya Coffee Table Book</a>
                      </li>
                      <li>
                        <a href="#">Enabling The Rural Youth To Grasp The</a>
                      </li>
                      <li>
                        <a href="#">Gyanodaya: New Hopes for Kasturba Gandhi</a>
                      </li>
                      <li>
                        <a href="#">
                          Gyanodaya: Eckovation Join Hands with Ada
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="container">
                <div className="coloumn ">
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                    <div className="row">
                      <div className="col-1">
                        <img
                          className="ftr-content-data1-ic2"
                          //   src={AddressIcon}
                          alt="addr"
                        />
                      </div>
                      <div className="col-11">
                        <div className="ftr-content-data1">
                          Godda, Jharkhand
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                    <div className="row">
                      <div className="col-1">
                        <img
                          className="ftr-content-data1-ic2"
                          //   src={ContactUsIcon}
                          alt="ph"
                        />
                      </div>
                      <div className="col-11">
                        <div className="ftr-content-data1">+91-9266677335</div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                    <div className="row">
                      <div className="col-1">
                        <img
                          className="ftr-content-data1-ic3"
                          //   src={EmailIcon}
                          alt="email"
                        />
                      </div>
                      <div className="col-11">
                        <div className="ftr-content-data1">
                          info@eckovation.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="ftr-divider"></div>
      </div>

      <div className="container">
        <div className="ftr-foot">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <center className="ftr-foot-cp">
                <i className="fa fa-copyright" aria-hidden="true" />
                2020 Eckovation Solutions Private Limited
              </center>
            </div>

            {/* <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <center className="ftr-foot-icons">
                  <div className="row">
                    <div className="col-1"></div>
                    <div className="col-2">
                      <i
                        className="fa fa-facebook-square fa-lg"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="col-2">
                      <i className="fa fa-twitter fa-lg" aria-hidden="true" />
                    </div>
                    <div className="col-2">
                      <i className="fa fa-instagram fa-lg" aria-hidden="true" />
                    </div>
                    <div className="col-2">
                      <i
                        className="fa fa-youtube-play fa-lg"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="col-2">
                      <i
                        className="fa fa-linkedin-square fa-lg"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="col-1"></div>
                  </div>
                </center>
              </div> */}

            {/* <div className="col-lg-1 col-md-1 d-none d-md-block"></div> */}
            <center className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <span className="footer-foot"> Terms of Service</span>
              <span className="footer-divider"> | </span>
              <span className="footer-foot"> Site Map </span>
              <span className="footer-divider"> | </span>
              <span className="footer-foot"> Privacy Policy </span>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
