import React from "react";
import ProfileOptions from "./ProfileOptions";

const Profile = () => {
  const [active, setActive] = React.useState(1);
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
                    <ProfileOptions
                      active={active}
                      setActive={(value) => {
                        setActive(value);
                      }}
                    />
                  </div>
                  <div className="col-9 ">
                    <h1>{active}</h1>
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

export default Profile;
