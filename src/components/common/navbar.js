import React from "react";
import { ReactComponent as NbCollapse } from "../../images/navbar-collapse.svg";
import { ReactComponent as Logo } from "../../images/logo.svg";

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
                Home
              </a>
            </li>
            <li>
              <a href="/aboutUs" className="nvbr-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="nvbr-link">
                Blogs
              </a>
            </li>
            <li>
              <a
                href="https://gyanodaya.eckovation.com/static/#/login"
                className="btn-main"
              >
                Log In
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
                <a href="/aboutUs" className="nvbr-sm-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="nvbr-sm-link">
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="https://gyanodaya.eckovation.com/static/#/login"
                  className="nvbr-sm-link"
                >
                  Log In
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
