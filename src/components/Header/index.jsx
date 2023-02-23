import { Container } from "./styles"

import LogoDark from '../../assets/logo-dark.svg'
import { Button } from "../Button"
import { theme } from "../../theme"

export const Header = () => {
    return(
        <Container>
            <nav>
                <ul>
                    <li><img src={LogoDark} alt="logo" /></li>
                    <li><Button backgroundColor={theme.colors.primary}/></li>
                </ul>
            </nav>
        </Container>
    )
}