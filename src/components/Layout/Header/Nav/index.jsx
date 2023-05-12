import Menu from "./Menu";
import Search from "./Search";
import Cart from "./Cart";
import NavStyled from "./Nav.styled";
import { useThemeUpdate } from "../../../../context/ThemeContext";

export default function Nav() {
  const toggleTheme = useThemeUpdate();
  return (
    <NavStyled>
      {/* <BaseButton onClick={toggleTheme}>dark</BaseButton> */}
      <Search />
      <Cart />
      <Menu />
    </NavStyled>
  );
}
