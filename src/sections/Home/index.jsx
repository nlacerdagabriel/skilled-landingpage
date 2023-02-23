import { theme } from "../../theme";
import { Container, HeroText } from "./styles";
import { Button } from "../../components/Button";
import HeroImageDesktop from "../../assets/hero-image-desktop.png";

export const Home = () => {
  return (
    <Container>
      <HeroText>
        <h1>Maximize skill, minimize budget</h1>

        <p>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>

        <Button backgroundColor={theme.colors.primary_gradient}>
          Get Started
        </Button>
      </HeroText>

      <img src={HeroImageDesktop} />
    </Container>
  );
};
