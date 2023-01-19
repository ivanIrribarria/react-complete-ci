import SimpleContainer from './Container'
import {lightTheme} from "../themes/light.theme";
import {darkTheme} from "../themes/dark.theme";
import {CssBaseline, ThemeProvider} from "@mui/material";

describe('<SimpleContainer /> light theme', () => {
    it('renders', () => {
        cy.mount(
            <ThemeProvider theme={lightTheme}>
                <CssBaseline/>
                <SimpleContainer/>
            </ThemeProvider>)
    })
})

describe('<SimpleContainer /> dark theme', () => {
    it('renders', () => {
        cy.mount(
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <SimpleContainer/>
            </ThemeProvider>)
    })
})