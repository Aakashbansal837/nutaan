import React from "react";
import ProfileOptions from "./ProfileOptions";
import MyAccount from "./MyAccount";
import MyOrder from "./MyOrder";
import Addresses from "./Addresses";
import PaymentDetails from "./paymentDetails";
import PersonalInfo from "./PersonalInfo";

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
                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 px-0">
                    <ProfileOptions
                      active={active}
                      setActive={(value) => {
                        setActive(value);
                      }}
                    />
                  </div>
                  <div className="d-none d-md-block col-9 ">
                    {active == 1 ? (
                      <MyAccount />
                    ) : active == 3 ? (
                      <MyOrder />
                    ) : active == 4 ? (
                      <Addresses />
                    ) : active == 5 ? (
                      <PaymentDetails />
                    ) : active == 6 ? (
                      <PersonalInfo />
                    ) : null}
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
