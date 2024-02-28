import React from "react";
import { Link } from "react-router-dom";
<h1>hello world</h1>
const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Exclusive</h1>
      <ul className="links">
        <Link to={"/"}><li>Home</li>{" "}</Link>
        <Link to={"/contact"}><li>Contact</li></Link>
        <Link to={"/shop"}><li>Shop</li></Link>
        <Link to={"/signUp"}><li>Sign Up</li></Link>
      </ul>
      <div className="buttons">
        <button>Click</button>
      </div>
    </div>
  );
};

export default Navbar;
