import React from "react";

import NavbarSmall from "./NavbarSmall";
import NavbarBig from "./NavbarBig";

const Navbar = () => {
  return (
    <nav className="nvbr">
      <NavbarBig />
      <NavbarSmall page={"all"} />
    </nav>
  );
};

export default Navbar;
