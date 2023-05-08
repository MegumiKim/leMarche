import { Link } from "react-router-dom";
import StyledLogo from "./Logo.styled";

export default function Logo() {
  return (
    <StyledLogo>
      {/* <img src="./images/logo.jpg" /> */}
      <Link to="/">LeMarche</Link>
    </StyledLogo>
  );
}
