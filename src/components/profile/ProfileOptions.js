import React from "react";
import { Button } from "@material-ui/core";

const ProfileOptions = ({ active, setActive }) => {
  const options = [
    [2, "wishlist"],
    [3, "My Orders"],
    [4, "Addresses"],
    [5, "Payment Details"],
    [6, "Personal Info"],
    [7, "Nutaan Credit"],
  ];
  return (
    <div className="profile-options">
      <div className="container">
        <div className="row">
          <div className="col-12 px-0">
            <div
              className={
                active == 1
                  ? "d-none d-md-block profile-options-option-selected profile-options-option-0"
                  : "d-none d-md-block profile-options-option profile-options-option-0"
              }
              onClick={() => setActive(1)}
            >
              <div
                className={
                  active == 1
                    ? "profile-options-option-selected-1"
                    : "profile-options-option-1"
                }
              >
                My account
              </div>
            </div>

            {options.map((opt) => (
              <div
                className={
                  active == opt[0]
                    ? "profile-options-option-selected"
                    : "profile-options-option"
                }
                onClick={() => setActive(opt[0])}
              >
                <div
                  className={
                    active == opt[0]
                      ? "profile-options-option-selected-1"
                      : "profile-options-option-1"
                  }
                >
                  {opt[1]}
                </div>
              </div>
            ))}

            <div className="profile-options-option-2">
              <center>
                <Button
                  variant="contained"
                  color="secondary"
                  className="profile-options-option-2-btn"
                >
                  Logout
                </Button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOptions;
