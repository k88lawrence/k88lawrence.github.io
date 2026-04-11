import { NavLink } from "react-router-dom";

import Socials from "./socials";

import "./sidebar.css";

const Sidebar = () => {
  const getLinkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-link active-nav-link" : "nav-link";

  return (
    <div className="sidebar">
      <div>
        <NavLink to="/">
          <h1>Kate Lawrence</h1>
        </NavLink>
        <nav>
          <NavLink className={getLinkClasses} to="/drawings">
            Drawings
          </NavLink>
          <NavLink className={getLinkClasses} to="/paintings">
            Paintings
          </NavLink>
          <NavLink className={getLinkClasses} to="/cv">
            CV
          </NavLink>
          <NavLink className={getLinkClasses} to="/contact">
            Contact
          </NavLink>
        </nav>
      </div>

      <Socials />
    </div>
  );
};

export default Sidebar;
