import Nav from "./Nav";
import StyledHeader from "./Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <div>Header with Logo and nav</div>
      <Nav />
    </StyledHeader>
  );
}
