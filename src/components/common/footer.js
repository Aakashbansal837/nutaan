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
                    <div className="ftr-content-data">Home</div>
                  </div>
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                    <div className="ftr-content-data">Apparel</div>
                  </div>
                  <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                    <div className="ftr-content-data">Accesories</div>
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
                      href="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      className="ftr-content-head"
                    >
                      Trending Searches
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
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="container">
                <div className="coloumn ">
                  <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0">
                    <div className="ftr-content-data1-spcg">
                      <div className="row">
                        <div className="col-3">
                          <div className="ftr-logo">
                            <i className="fa fa-home" aria-hidden="true"></i>
                          </div>
                        </div>

                        <div className="col-9">
                          <div className="ftr-content-data1">
                            Doorstep services
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0">
                  <div className="ftr-content-data1-spcg">
                    <div className="row">
                      <div className="col-3">
                        <div className="ftr-logo">
                          <i className="fa fa-scissors" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="ftr-content-data1">
                          Fitting At Your Home
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 px-0">
                    <div className="ftr-content-data1-spcg">
                      <div className="row">
                        <div className="col-3">
                          <div className="ftr-logo">
                            <i className="fa fa-smile-o" aria-hidden="true"></i>
                          </div>
                        </div>
                        <div className="col-9">
                          <div className="ftr-content-data1">
                            Consult Our Designers
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
      </div>

      <div className="container">
        <div className="ftr-foot">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="ftr-content-head">Address</div>
              <div className="coloumn ">
                <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                  <div className="ftr-content-data">
                    49/5 Karl Mark Sarani
                    <br /> Kolkata - 700023
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="ftr-content-head">Contact</div>
              <div className="coloumn ">
                <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                  <div className="ftr-content-data">+91 8562851814 </div>
                </div>
                <div className=" col-lg-12 col-md-12 col-sm-6 col-xs-6 px-0">
                  <div className="ftr-content-data">Amitsaha990@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
