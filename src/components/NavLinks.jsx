import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/pokemon">find a poke</NavLink>
      </li>
      <li>
        <NavLink to="/gifts">gifts</NavLink>
      </li>
    </>
  );
};

export default NavLinks;
