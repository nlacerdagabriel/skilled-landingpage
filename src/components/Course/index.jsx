import { Container } from "./styles";

export const Course = ({ title, description, icon }) => {
  return (
    <Container>
      <div>{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href="#">Get Started</a>
    </Container>
  );
};
