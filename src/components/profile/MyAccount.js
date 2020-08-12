import React from "react";

const MyAccount = () => {
  return (
    <div className="profile-account">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="profile-account-head">Basic Account Info</div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="profile-account-main">
              <div className="profile-account-main-head">
                Personal Info <span> Edit</span>
              </div>
              <div className="profile-account-main-data">
                <span className="profile-account-main-data-hd">
                  Andrei Masharin
                </span>
                <br />
                <span className="profile-account-main-data-dt">
                  andymarsh@gmail.com
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="profile-account-main">
              <div className="profile-account-main-head">
                Address Book <span> Edit</span>
              </div>
              <div className="profile-account-main-data">
                <span className="profile-account-main-data-hd">
                  Andy Marsh +91 9876543210
                </span>
                <br />
                <span className="profile-account-main-data-dt">
                  Nowhere nagar, Cape Town, 7303
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className="profile-account-main">
              <div className="profile-account-main-head">
                Saved Cards <span> Edit</span>
              </div>
              <div className="profile-account-main-data">
                <span className="profile-account-main-data-hd">UBS Bank</span>
                <br />
                <span className="profile-account-main-data-dt">
                  Ending in 7819 <br />
                  Validity 03/24
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
