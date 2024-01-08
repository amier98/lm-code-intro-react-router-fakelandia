import { NavLink } from "react-router-dom";

const NavBarHeader: React.FC = () => {
  return (
    <>
      <nav className="nav__container">
        <ul className="Nav__list">
          <li className="Nav__Links">
            <NavLink to="/home" style={{ textDecoration: "none" }}>
              Home
            </NavLink>
          </li>
          <li className="Nav__Links">
            <NavLink to="/misdeameanors" style={{ textDecoration: "none" }}>
              Misdeameanours
            </NavLink>
          </li>
          <li className="Nav__Links">
            <NavLink to="/confession" style={{ textDecoration: "none" }}>
              Confess to us
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBarHeader;
