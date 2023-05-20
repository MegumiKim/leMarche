import { Link } from "react-router-dom";
import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import StyledMenu from "./Menu.styled";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <StyledMenu onClick={() => setShowMenu(!showMenu)}>
      {/* {showMenu ? <FaTimes /> : <FaBars />} */}
      {showMenu && (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </StyledMenu>
  );
}
