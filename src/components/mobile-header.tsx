import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./mobile-header.css";
import Nav from "./nav";

const MobileHeader = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const hamburgerClasses = isMobileNavOpen
    ? "hamburger-button open-hamburger-button"
    : "hamburger-button";

  return (
    <div className="mobile-menu">
      <div className="mobile-header">
        <NavLink to="/">
          <h1>Kate Lawrence</h1>
        </NavLink>
        <button
          className={hamburgerClasses}
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          aria-label="mobile navigation toggle"
        >
          <div className="bar-1" />
          <div className="bar-2" />
          <div className="bar-3" />
        </button>
      </div>
      {isMobileNavOpen && (
        <div className="mobile-nav">
          <Nav />
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
