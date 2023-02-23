import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.button`
    all: unset;
    cursor: pointer;

    border-radius: 1.75rem;

    font-weight: bold;

    padding: 0.9rem 2rem;

    background-color: ${props => props.backgroundColor};
    color: ${theme.colors.white};
`
