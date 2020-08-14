import React from "react";
import ProfileOptions from "./ProfileOptions";
import MyAccount from "./MyAccount";
import MyOrder from "./MyOrder";
import Addresses from "./Addresses";
import PaymentDetails from "./paymentDetails";
import PersonalInfo from "./PersonalInfo";

const Profile = () => {
  const [active, setActive] = React.useState(1);
  const [option, setOption] = React.useState(0);
  const [user, setUser] = React.useState({
    name: "user name",
    phone: "9876-543-210",
    email: "adamsmith@gmail.com",
  });
  const SelectionChanged = (option) => {
    setActive(option);
    setOption(1);
  };
  return (
    <div className="profile">
      <div className="container">
        <div className="row">
          <div className="d-none d-md-block col-12 ">
            <div className="profile-header">My Profile</div>
          </div>
          <div className="d-block d-md-none col-12">
            <div className="profile-header-small-ph">{user.phone}</div>
            <div className="profile-header-small-email">{user.email}</div>
          </div>
          <div className="col-12">
            <div className="profile-main">
              <div className="container">
                <div className="row">
                  <div
                    className={
                      option == 0
                        ? "col-12 col-sm-12 col-md-3 col-lg-3 px-0"
                        : "d-none d-md-block  col-md-3 col-lg-3 px-0"
                    }
                  >
                    <ProfileOptions
                      active={active}
                      changeOption={(value) => {
                        SelectionChanged(value);
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

                  <div
                    className={
                      option == 1 ? "d-block d-md-none" : "d-none col-12"
                    }
                  >
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
