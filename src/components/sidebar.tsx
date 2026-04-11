import { Link } from "react-router-dom";

import Socials from "./socials";

import "./sidebar.css";

const Sidebar = () => (
  <div className="sidebar">
    <div>
      <Link to="/">
        <h1>Kate Lawrence</h1>
      </Link>
      <nav>
        <Link className="nav-link" to="/drawings">
          Drawings
        </Link>
        <Link className="nav-link" to="/paintings">
          Paintings
        </Link>
        <Link className="nav-link" to="/cv">
          CV
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </nav>
    </div>

    <Socials />
  </div>
);

export default Sidebar;
