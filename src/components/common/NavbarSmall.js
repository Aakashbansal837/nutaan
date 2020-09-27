import React from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Bag } from "../../images/bag.svg";
import { ReactComponent as NbCollapse } from "../../images/navbar-collapse.svg";
import { ReactComponent as Heart } from "../../images/heart.svg";
const NavbarSmall = ({ page }) => {
  const [active, setActive] = React.useState(false);
  const [fade, setFade] = React.useState(false);
  return (
    <>
      <div className="d-sm-block d-md-none">
        <div className="container nvbr-sm">
          <div className="row">
            <div className="col-2">
              <span
                onClick={() => {
                  setActive(!active);
                  setFade(!fade);
                }}
                className="nvbr-sm-cl-1"
              >
                <NbCollapse
                  className={
                    page == "profile" ? "profile-navbar-cl" : "nvbr-sm-cl"
                  }
                />
              </span>
            </div>

            <div className="col-10 pr-0">
              <ul className="profile-navbar-menu">
                <li className="profile-navbar-text">
                  {page === "profile" ? (
                    <a href="/profile" className="profile-navbar-link">
                      My Profile
                    </a>
                  ) : (
                    <a href="/home">
                      <Logo className="nvbr-logo" />
                    </a>
                  )}
                </li>
                <li>
                  <a href="/wishlist" className="profile-navbar-link">
                    <Heart className="profile-navbar-heart" />
                  </a>
                </li>

                <li>
                  <a href="/shopping-bag" className="profile-navbar-link">
                    <Bag className="profile-navbar-bag" />
                  </a>
                </li>
              </ul>
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
    </>
  );
};

export default NavbarSmall;
