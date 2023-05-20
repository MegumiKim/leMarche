import Menu from "./Menu";
import Cart from "./CartIcon";
import NavStyled from "./Nav.styled";

export default function Nav() {
  return (
    <NavStyled>
      <Cart />
      <Menu />
    </NavStyled>
  );
}
