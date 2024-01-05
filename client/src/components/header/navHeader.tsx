import { NavLink } from "react-router-dom";

const NavBarHeader: React.FC = () => {
  return (
    <>
      <nav className="Nav__container">
        {/* <DepartmentName /> */}
        <ul className="Nav__list">
          <li className="Nav__Links">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="Nav__Links">
            <NavLink to="/misdeameanors">Misdeameanours</NavLink>
          </li>
          <li className="Nav__Links">
            <NavLink to="/confession">Confess to us</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBarHeader;
