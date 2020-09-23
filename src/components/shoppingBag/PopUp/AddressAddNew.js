import React from "react";
import { Button } from "@material-ui/core";

const AddressPopUpAddNew = ({ PlaceOrderClicked }) => {
  return (
    <div style={{ height: "100%" }}>
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
                    <div className="popup-addr-data-1">
                      <span className="popup-addr-data-head">Contact Info</span>
                    </div>
                  </div>
                  <div className="col-12 px-0">
                    <div className="popup-addr-data">
                      <input
                        className="popup-addr-data-input"
                        type="text"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-12 px-0">
                    <div className="popup-addr-data">
                      <input
                        className="popup-addr-data-input"
                        type="text"
                        placeholder="Contact Number"
                      />
                    </div>
                  </div>
                  <div className="col-12 px-0">
                    <div className="popup-addr-data-1">
                      <span className="popup-addr-data-head">Address</span>
                    </div>
                  </div>
                  <div className="col-12 px-0">
                    <div className="popup-addr-data">
                      <input
                        className="popup-addr-data-input"
                        type="text"
                        placeholder="Pincode"
                      />
                    </div>
                  </div>
                  <div className="col-12 px-0">
                    <div className="popup-addr-data-2">
                      <textarea
                        className="popup-addr-data-textarea"
                        type="text"
                        placeholder="Full Address"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-6 pl-0">
                    <div className="popup-addr-data">
                      <input
                        className="popup-addr-data-input"
                        type="text"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <div className="col-6 px-0">
                    <div className="popup-addr-data">
                      <input
                        className="popup-addr-data-input"
                        type="text"
                        placeholder="State"
                      />
                    </div>
                  </div>
                  <div className="col-12 px-0">
                    <div className="popup-addr-data">
                      <Button
                        className="popup-addr-data-btn"
                        color="secondary"
                        variant="contained"
                      >
                        Add Address
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressPopUpAddNew;
