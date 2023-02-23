import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  width: 350px;
  height: 350px;

  padding: 4rem 2rem 2.5rem 2rem;

  border-radius: 1rem;

  background-color: ${theme.colors.white};
  position: relative;

  box-shadow: 0px 25px 50px rgba(6, 22, 141, 0.0442381);

  & > div {
    position: absolute;
    top: -1.75rem;
    left: 2rem;
  }

  h2 {
    margin-bottom: 1.5rem;
    font-size: ${theme.size.fonts.heading.s.size};
    line-height: ${theme.size.fonts.heading.s.line_height};

    font-weight: 800;
  }

  p {
    margin-bottom: 3.25rem;
    font-size: ${theme.size.fonts.body.m.size};
    line-height: ${theme.size.fonts.body.m.line_height};

    font-weight: 500;

    color: ${theme.colors.text};
  }

  a {
    all: unset;

    font-weight: 700;

    font-size: ${theme.size.fonts.body.m.size};
    line-height: ${theme.size.fonts.body.m.line_height};

    cursor: pointer;

    color: ${theme.colors.primary};
  }

  div {
    height: 56px;
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 99px;

    background-image: ${theme.colors.primary_gradient};

    svg {
      height: 25px;
      width: 25px;
      color: ${theme.colors.white};
    }
  }
`;
