import React from "react";
import { useState, useEffect } from "react";
import "../navbar.css";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";
const navbar = Navbar;
function Navbar() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 1) {
      if (!isNavbarFixed) setIsNavbarFixed(true);
    } else {
      if (isNavbarFixed) setIsNavbarFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavbarFixed]);

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  // const navbar= () =>{
  return (
    <nav className={`navbar ${isNavbarFixed ? "navbar-fixed" : ""}`}>
      <Link to="/" className="nav__brand">
        <img src={logo2} alt="logo" />
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
            to="/About"
            className="nav__link"
          >
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Service" className="nav__link">
            Service
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Strategie" className="nav__link">
            Strategie
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Create" className="nav__link">
            Create
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
export default navbar;
