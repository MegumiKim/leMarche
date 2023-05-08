import HeroStyled from "./Hero.styled";

export default function Hero(props) {
  return (
    <HeroStyled>
      <h1>Welcome to LeMarche</h1>
      <img src="./images/hero.webp" alt="hero image"></img>
    </HeroStyled>
  );
}
