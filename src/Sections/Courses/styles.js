import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.section`
  background-image: linear-gradient(360deg, #f0f1ff 0%, #ffffff 85%);


  margin-top: 230px;
  padding-bottom: 140px;

  & > div {
    max-width: ${theme.size.container.xl};

    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem 2rem;

    margin: 0 auto;
  }

  .check-out {
    padding: 4rem 2rem;
    font-weight: 800;

    background-image: ${theme.colors.primary_gradient};

    border-radius: 1rem;

    p {
      font-size: ${theme.size.fonts.heading.m.size};
      line-height: ${theme.size.fonts.heading.m.line_height};

      color: ${theme.colors.white};
    }
  }
`;
