import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.section`
  max-width: ${theme.size.container.xl};
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 172px;

  img{
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  
  @media(max-width: 1120px){
    padding: 0 2rem;
    margin-top: 90px;

  }

  
  @media(max-width: 768px){
    flex-direction: column;

    img{
      margin-top: 5rem;
      position: relative;
    }
  }
`;

export const HeroText = styled.div`

  width: 50%;

  h1 {
    font-size: ${theme.size.fonts.heading.xl.size};
    line-height: ${theme.size.fonts.heading.xl.line_height};

    font-weight: 800;

    margin-bottom: 2rem;
  } 

  p{
    color: ${theme.colors.text};
    font-size: ${theme.size.fonts.body.m.size};
    line-height: ${theme.size.fonts.body.m.line_height};

    margin-bottom: 2.5rem;
  }

  @media(max-width: 1120px){
    width: 60%;
  }

  @media(max-width: 768px){
    width: 100%;
  }
`;
