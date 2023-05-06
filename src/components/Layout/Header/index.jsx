import Nav from "./Nav";
import StyledHeader from "./Header.styled";
import Logo from "./Logo";

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
    </StyledHeader>
  );
}
