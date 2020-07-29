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
              <h3 className="modal-title" id="exampleModalLongTitle">
                Login To Continue
              </h3>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCheck;
