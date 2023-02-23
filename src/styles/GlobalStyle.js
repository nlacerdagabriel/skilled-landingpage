import { createGlobalStyle } from "styled-components";
import { theme } from "../theme";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    html{
        scroll-behavior: smooth;
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }
    body{
        -webkit-font-smoothing: antialiased;
        
        background-position: center;
        color: ${theme.colors.secondary};
        font-family: 'Plus Jakarta Sans', sans-serif;

    }

    body::-webkit-scrollbar {
        display: none;
    }
    
    body, input, textarea, button{
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    button{
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    a{
        text-decoration: none;
    }
`;
