import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import StyledMenu from "./Menu.styled";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  return (
    <StyledMenu onClick={() => setShowMenu(!showMenu)}>
      {showMenu ? <FaTimes /> : <FaBars />}
      {showMenu && (
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" && "active"}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={location.pathname === "/cart" && "active"}
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" && "active"}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </StyledMenu>
  );
}
