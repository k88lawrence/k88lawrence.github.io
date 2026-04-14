import { NavLink } from "react-router-dom";

import Socials from "./socials";

import "./sidebar.css";
import Nav from "./nav";

const Sidebar = () => (
  <div className="sidebar">
    <div>
      <NavLink to="/">
        <h1>Kate Lawrence</h1>
      </NavLink>
      <Nav />
    </div>

    <Socials />
  </div>
);

export default Sidebar;
