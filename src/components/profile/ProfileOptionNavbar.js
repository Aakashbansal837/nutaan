import React from "react";
import { ReactComponent as NbCollapse } from "../../images/navbar-collapse.svg";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Bag } from "../../images/bag.svg";
import { ReactComponent as Heart } from "../../images/heart.svg";
import UserImage from "../../images/user.png";

const ProfileOptionNavbar = ({ selectedOption, changeHide }) => {
  const [active, setActive] = React.useState(false);
  const [fade, setFade] = React.useState(false);
  return (
    <nav className="nvbr">
      <div className="d-none d-md-block">
        <div className=" nvbr-container px-0">
          <a href="/home">
            <Logo className="nvbr-logo" />
          </a>

          <ul className="nvbr-menu">
            <li>
              <a href="/home" className="nvbr-link">
                Categories
              </a>
            </li>
            <li>
              <a href="/aboutUs" className="nvbr-link">
                Hampers
              </a>
            </li>
            <li>
              <input className="nvbr-srch" placeholder="Search here" />
            </li>
            <li>
              <a href="#" className="nvbr-link">
                <Bag className="nvbr-bag" />
                <span className="nvbr-bag-txt">Bag</span>
              </a>
            </li>
            <li className="nav-item avatar dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={UserImage}
                  className="rounded-circle nvbr-usr-img z-depth-0"
                  alt="avatar image"
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-sm-block d-md-none">
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
