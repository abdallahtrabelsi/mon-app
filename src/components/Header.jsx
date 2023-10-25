import React, { useContext } from "react";
import header1 from "../assets/01.png";

import { ThemeBgContext } from "./ContextWrapper/ThemeContext";
import { Link } from "react-router-dom";

const Header = ({ topRef }) => {
  const { theme } = useContext(ThemeBgContext);

  return (
    <div ref={topRef} className="mx-auto pt-16">
      <div className="sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center">
        <div className="sm:w-full sm:pl-4 w-4/5 pl-24">
          {/* <Switch
            label={theme === "light" ? "Switch to Dark" : "Switch to Light"}
            defaultChecked={theme === "dark" ? true : false}
            onClick={handleTheme}
          /> */}

          <h1
            className={
              theme === "light"
                ? "sm:text-3xl text-4xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
                : "sm:text-3xl text-4xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
            }
          >
            Why COSMOS Network ? <br />
            <span
              className={
                theme === "light"
                  ? "sm:text-1xl text-dark text-2xl font-petitFormal font-bold "
                  : "sm:text-1xl text-dark text-2xl font-petitFormal font-bold"
              }
            >
              Opportunities...Beyond Borders
            </span>{" "}
            <br />
          </h1>
          <div className="mt-4">
            <p
              className={
                theme === "light"
                  ? "sm:text-lg w-5/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark text-1xl"
                  : "sm:text-lg w-5/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark text-1xl"
              }
            >
              COSMOS Network offers support and representation in international
              markets. COSMOS Network is accredited from the Tunisian ministry
              of trade and handicrafts for export consulting services
            </p>
          </div>
          <div className="pb-20">
            <button className="pushable mt-4">
              <Link to="/About" className="nav__link">
                <span className="front">About Us</span>
              </Link>
            </button>
          </div>
        </div>
        <div className="sm:pl-4 mt-4">
          <div>
            <h2
              className={
                theme === "light"
                  ? "sm:text-3xl text-5xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
                  : "sm:text-3xl text-5xl pb-4 font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
              }
            ></h2>
          </div>
          <img
            className="sm:h-[475px] h-[765px] w-full bg-no-repeat bg-center relative z-10 header rounded-xl"
            src={header1}
            alt="header-phone"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
