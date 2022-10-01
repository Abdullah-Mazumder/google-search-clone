import React from "react";
import Link from "./Link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">Bangladesh</div>
      <div className="bottom">
        <div className="left">
          <Link link="#" text="About" />
          <Link link="#" text="Advertising" />
          <Link link="#" text="Business" />
          <Link link="#" text="How Search works" />
        </div>
        <div className="right">
          <Link link="#" text="Privacy" />
          <Link link="#" text="Terms" />
          <Link link="#" text="Settings" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
