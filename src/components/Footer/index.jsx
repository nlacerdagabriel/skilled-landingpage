import { Container } from "./styles";
import LogoLight from "../../assets/logo-light.svg";
import { Button } from "../Button";
import { theme } from "../../theme";

export const Footer = () => {
  return (
    <Container>
      <div>
        <img src={LogoLight} alt="Logo" />
        <Button backgroundColor={theme.colors.secondary_gradient} />
      </div>
    </Container>
  );
};
