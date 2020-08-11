import React from "react";

const ProfileOptions = () => {
  return <div></div>;
};

const Profile = () => {
  return (
    <div className="profile">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <div className="profile-header">My Profile</div>
          </div>
          <div className="col-12">
            <div className="profile-main">
              <div className="container">
                <div className="row">
                  <div className="col-3 px-0">
                    <ProfileOptions />
                  </div>
                  <div className="col-9 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
