import React from "react";
import NavbarBig from "../common/NavbarBig";

const ProfileOptionNavbar = ({ selectedOption, viewDetail, changeHide }) => {
  return (
    <nav className="nvbr">
      <NavbarBig />
      <div className={viewDetail === -1 ? "d-sm-block d-md-none" : "d-none"}>
        <div className="container nvbr-sm">
          <div className="row">
            <div className="col-1 ">
              <span
                onClick={() => {
                  changeHide(true);
                }}
              >
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </span>
            </div>
            <div className="col-11 ">
              <span className="profile-navbar-text">{selectedOption}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ProfileOptionNavbar;
