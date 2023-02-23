import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.button`
  all: unset;
  cursor: pointer;

  border-radius: 1.75rem;

  font-weight: bold;

  padding: 0.9rem 2rem;

  ${(props) =>
    props.backgroundColor.includes("gradient")
      ? `background-image: ${props.backgroundColor};`
      : `background-color: ${props.backgroundColor};`}

  color: ${theme.colors.white};
`;
