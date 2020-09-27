import React from "react";
import { ReactComponent as NbCollapse } from "../../images/navbar-collapse.svg";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Bag } from "../../images/bag.svg";
import UserImage from "../../images/user.png";

const Navbar = () => {
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
            <div className="col-2">
              <span
                onClick={() => {
                  setActive(!active);
                  setFade(!fade);
                }}
              >
                <NbCollapse className="nvbr-sm-cl" />
              </span>
            </div>
            <div className="col-10">
              <center>
                <a href="/home">
                  <Logo className="nvbr-logo" />
                </a>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div className="d-sm-block d-md-none">
        <div className={fade ? " nvbr-sm-slider" : "nvbr-sm-slider-2"}>
          <div
            className="nvbr-sm-bg"
            onClick={() => {
              setActive(false);
              setFade(false);
            }}
          ></div>
        </div>
        <div className={active ? " nvbr-sm-active" : "nvbr-sm-non-active"}>
          <div className="nvbr-sm-data">
            <ul className="nvbr-sm-menu">
              <li>
                <a href="/" className="nvbr-sm-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/product-listing" className="nvbr-sm-link">
                  products
                </a>
              </li>
              <li>
                <a href="/wishist" className="nvbr-sm-link">
                  wishlist
                </a>
              </li>
              <li>
                <a href="/shopping-bag" className="nvbr-sm-link">
                  Bag
                </a>
              </li>
              <li>
                <a href="/profile" className="nvbr-sm-link">
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
