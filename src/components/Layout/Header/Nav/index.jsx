import Menu from "./Menu";
import Search from "./Search";
import Cart from "./Cart";
import NavStyled from "./Nav.styled";

export default function Nav() {
  return (
    <NavStyled>
      <Search />
      <Cart />
      <Menu />
    </NavStyled>
  );
}
