import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.section`
  background-image: linear-gradient(360deg, #f0f1ff 0%, #ffffff 85%);

  padding: 0 2rem;

  margin-top: 230px;
  padding-bottom: 140px;

  
  @media(max-width: 992px){
      margin-top: 110px;
    }

    
    @media(max-width: 768px){
      margin-top: 70px;
      padding-bottom: 80px;
    }

  & > div {
    max-width: ${theme.size.container.xl};

    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem 2rem;

    margin: 0 auto;


    @media(max-width: 992px){
      grid-template-columns: 1fr 1fr;

    }

    @media(max-width: 768px){
      grid-template-columns: 1fr;
    }
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
