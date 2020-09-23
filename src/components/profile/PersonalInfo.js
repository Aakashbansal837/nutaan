import React from "react";
import { Button } from "@material-ui/core";

const PersonalInfo = () => {
  const [btn, setBtn] = React.useState(0);
  return (
    <div className="profile-personal-info">
      <div className="container">
        <div className="row">
          <div className="d-none d-md-block col-12">
            <div className="profile-personal-info-disc">
              Manage your personal details or change your password here
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="profile-personal-info-left">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="profile-personal-info-main">
                      <label for="userName">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                        placeholder="User Full Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="profile-personal-info-main">
                      <label for="UserPhone">Mobile Number</label>
                      <input
                        type="tel"
                        pattern="[7-9]{3}[0-9]{7}"
                        maxLength="10"
                        className="form-control"
                        id="UserPhone"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="profile-personal-info-main">
                      <label for="UserEmail">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="UserEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="profile-personal-info-main">
                      <label>Gender</label>
                      <div className="container">
                        <div className="row">
                          <div className="col-6 pl-0">
                            <div className="profile-personal-info-main-btn">
                              <Button
                                color={btn === 0 ? "secondary" : "default"}
                                variant="outlined"
                                className={
                                  btn === 0
                                    ? "profile-personal-info-main-btn-gender"
                                    : "profile-personal-info-main-btn-gender-1"
                                }
                                onClick={() => setBtn(0)}
                              >
                                Female
                              </Button>
                            </div>
                          </div>
                          <div className="col-6 pl-0">
                            <div className="profile-personal-info-main-btn">
                              <Button
                                color={btn === 1 ? "secondary" : "default"}
                                variant="outlined"
                                className={
                                  btn === 1
                                    ? "profile-personal-info-main-btn-gender"
                                    : "profile-personal-info-main-btn-gender-1"
                                }
                                onClick={() => setBtn(1)}
                              >
                                Male
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
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="profile-personal-info-right">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="profile-personal-info-main">
                      <label for="userpassword"> PASSWORD</label>
                      <input
                        type="password"
                        className="form-control"
                        id="userpassword"
                        placeholder="User password"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="profile-personal-info-main">
                      <label for="userNewPass">NEW PASSWORD</label>
                      <input
                        type="password"
                        className="form-control"
                        id="userNewPass"
                        placeholder="new password"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="profile-personal-info-main">
                      <label for="userNewPasswordConfirm">
                        CONFIRM NEW PASSWORD
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="userNewPasswordConfirm"
                        placeholder="confirm new password"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="profile-personal-info-main">
                      <div className="profile-personal-info-main-pwd">
                        <label> password change button</label>
                        <Button
                          className="profile-personal-info-main-pwd-btn"
                          color="secondary"
                          variant="outlined"
                        >
                          Change Password
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="container">
              <div className="profile-personal-info-save">
                <Button
                  className="profile-personal-info-save-btn"
                  color="secondary"
                  variant="outlined"
                >
                  Save Changes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
