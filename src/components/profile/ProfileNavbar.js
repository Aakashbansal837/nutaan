import React from "react";
import NavbarSmall from "../common/NavbarSmall";
import NavbarBig from "../common/NavbarBig";

const ProfileNavbar = () => {
  return (
    <nav className="nvbr">
      <NavbarBig />
      <NavbarSmall page={"profile"} />
    </nav>
  );
};

export default ProfileNavbar;
