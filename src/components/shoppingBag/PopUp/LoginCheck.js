import React from "react";
import { Button } from "@material-ui/core";

const LoginCheck = () => {
  return (
    <div>
      <Button
        className="bill-btn-2"
        data-toggle="modal"
        data-target="#LoginCheckShoppingBag"
        color="secondary"
        variant="contained"
      >
        Place Order (NL)
      </Button>

      <div
        className="modal fade"
        id="LoginCheckShoppingBag"
        tabindex="-1"
        role="dialog"
        aria-labelledby="LoginCheckShoppingBagTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <span
                  className="modal-title popup-login-head"
                  id="exampleModalLongTitle"
                >
                  Login To Continue
                </span>
                <br />
                <span className="popup-login-head-sub">
                  We need this info to deliver your order
                </span>
              </div>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-12 px-0">
                    <div className="popup-login-body">
                      <input
                        className="popup-login-input"
                        placeholder="Phone or Email Id"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-12 px-0">
                    <div className="popup-login-body">
                      <input
                        className="popup-login-input"
                        placeholder="Password"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="col-12 px-0">
                    <div className="popup-login-body">
                      <Button
                        className="popup-login-btn-1"
                        color="secondary"
                        variant="contained"
                      >
                        Login
                      </Button>
                    </div>
                  </div>
                  <div className="col-12 px-0">
                    <div className="popup-login-body">
                      <div className="container">
                        <div className="row">
                          <div className="col-4 px-0">
                            <div className="popup-login-strike"></div>
                          </div>
                          <div className="col-4 px-0">
                            <div className="popup-login-strike-txt">
                              or Login using
                            </div>
                          </div>
                          <div className="col-4 px-0">
                            <div className="popup-login-strike"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 px-0">
                    <div className="popup-login-body">
                      <Button
                        className="popup-login-btn-2"
                        color="primary"
                        variant="contained"
                      >
                        FaceBook
                      </Button>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 px-0">
                    <div className="popup-login-body">
                      <Button
                        className="popup-login-btn-3"
                        color="secondary"
                        variant="outlined"
                      >
                        Google
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <span className="popup-login-ftr-fp">Forgot Password</span>
              <span className="popup-login-ftr-newusr">New here?</span>
              <span className="popup-login-ftr-create">Create an account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCheck;
