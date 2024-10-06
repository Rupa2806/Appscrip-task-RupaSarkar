import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item other-items-home opacity">
            <a href="#home">Home |</a>
          </li>
          <li className="navbar-item">
            <a href="#home">Shop</a>
          </li>
          <li className="navbar-item other-items">
            <a href="#about">Skills</a>
          </li>
          <li className="navbar-item other-items">
            <a href="#services">Stories</a>
          </li>
          <li className="navbar-item other-items">
            <a href="#portfolio">About</a>
          </li>
          <li className="navbar-item other-items">
            <a href="#contact">Contact us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
