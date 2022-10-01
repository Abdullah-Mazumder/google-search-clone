import React from "react";
import Link from "./Link";
import { CgMenuGridO } from "react-icons/cg";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="links">
          <Link link="www.gmail.com" text="Gmail" />
          <Link link="#" text="Images" />
          <div className="menu_icon">
            <span>
              <CgMenuGridO />
            </span>
          </div>
          <div className="image">
            <img src="http://localhost:3000/unnamed.jpg" alt="Abdullah" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
