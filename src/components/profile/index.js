import React from "react";
import ProfileOptions from "./ProfileOptions";
import MyAccount from "./MyAccount";
import MyOrder from "./MyOrder";
import Addresses from "./Addresses";
import PaymentDetails from "./paymentDetails";
import PersonalInfo from "./PersonalInfo";

const Profile = ({
  active,
  setActive,
  option,
  setOption,
  changeOption,
  viewDetail,
  setviewDetail,
}) => {
  const [user, setUser] = React.useState({
    name: "user name",
    phone: "9876-543-210",
    email: "adamsmith@gmail.com",
  });
  const SelectionChanged = (option) => {
    setActive(option);
    setOption(1);

    if (option === 1) {
      changeOption("My profile");
    } else if (option === 3) {
      changeOption("My Orders");
    } else if (option === 4) {
      changeOption("Addresses");
    } else if (option === 5) {
      changeOption("Saved Cards");
    } else if (option === 6) {
      changeOption("Personal Info");
    }
  };
  return (
    <div className={viewDetail === -1 ? "profile" : "profile-vd"}>
      <div className="container">
        <div className="row">
          <div className="d-none d-md-block col-12 ">
            <div className="profile-header">My Profile</div>
          </div>
          {option == 0 ? (
            <div className="d-block d-md-none col-12">
              <div className="profile-header-small-ph">{user.phone}</div>
              <div className="profile-header-small-email">{user.email}</div>
            </div>
          ) : null}
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
                      <MyOrder
                        viewDetail={viewDetail}
                        setViewDetail={setviewDetail}
                      />
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
                      option == 1
                        ? "d-block d-md-none col-12 px-0"
                        : "d-none col-12"
                    }
                  >
                    {active == 1 ? (
                      <MyAccount />
                    ) : active == 3 ? (
                      <MyOrder
                        viewDetail={viewDetail}
                        setViewDetail={setviewDetail}
                      />
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
