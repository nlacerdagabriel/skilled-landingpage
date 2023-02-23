import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.header` 
    margin-top: 2.3rem;

    padding: 0 2rem;

    nav{

        margin: 0 auto;
        max-width: ${theme.size.container.xl};

        ul{
            display: flex;
            align-items: center;
            justify-content: space-between;

            li{
                list-style: none;
            }
        }
    }
`