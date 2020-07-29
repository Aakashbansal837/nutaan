import React from "react";
import { Button } from "@material-ui/core";

const AddressPopUpAddNew = ({ PlaceOrderClicked }) => {
  return (
    <div>
      <Button
        className="shopping-addr-newAdd-btn"
        data-toggle="modal"
        data-target="#LoginCheckShoppingBag"
        color="secondary"
      >
        Add new Address
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
              <span
                className="modal-title popup-login-head"
                id="exampleModalLongTitle"
              >
                Add New Address
              </span>

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
                        onClick={() => PlaceOrderClicked()}
                        data-dismiss="modal"
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
                        onClick={() => PlaceOrderClicked()}
                        data-dismiss="modal"
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
                        onClick={() => PlaceOrderClicked()}
                        data-dismiss="modal"
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

export default AddressPopUpAddNew;
