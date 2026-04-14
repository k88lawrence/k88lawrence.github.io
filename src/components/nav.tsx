import { NavLink } from "react-router-dom";

const Nav = () => {
  const getLinkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-link active-nav-link" : "nav-link";

  return (
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
  );
};

export default Nav;
