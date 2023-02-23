import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.footer`
  background-color: ${theme.colors.secondary};

  

  & > div{
    margin: 0 auto;
  max-width: ${theme.size.container.xl};

  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  }

`;
