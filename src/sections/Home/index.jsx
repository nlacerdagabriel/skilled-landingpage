import { theme } from "../../theme";
import { Container, HeroText } from "./styles";
import { Button } from "../../components/Button";
import HeroImageDesktop from "../../assets/hero-image-desktop.png";
import HeroImageTablet from "../../assets/hero-image-tablet.png";
import HeroImageMobile from "../../assets/hero-image-mobile.png";
import { useEffect, useState } from "react";

export const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

        {width > 1120 && <img src={HeroImageDesktop} />}
        {width > 768 && width <= 1120 && <img src={HeroImageTablet} />}
        {width <= 768 && <img src={HeroImageMobile} />}
    </Container>
  );
};
