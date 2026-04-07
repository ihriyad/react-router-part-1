import React from "react";
import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h3>Hello I'm Header</h3>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
        {/* <NavLink to="/home">Home</NavLink> */}
      </nav>
    </div>
  );
};

export default Header;
