import React from "react";
import { ReactComponent as NbCollapse } from "../../images/navbar-collapse.svg";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Bag } from "../../images/bag.svg";

const Navbar = () => {
  const [active, setActive] = React.useState(false);
  const [fade, setFade] = React.useState(false);
  return (
    <nav className="nvbr">
      <div className="d-none d-md-block">
        <div className=" container nvbr-container">
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
                Bag
              </a>
            </li>
            <li>
              <a href="#" className="nvbr-link">
                Profile
              </a>
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
            <div className="col-8">
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
                <a href="/home" className="nvbr-sm-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/categories" className="nvbr-sm-link">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="nvbr-sm-link">
                  Hampers
                </a>
              </li>
              <li>
                <a href="#" className="nvbr-sm-link">
                  Bag
                </a>
              </li>
              <li>
                <a href="#" className="nvbr-sm-link">
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
