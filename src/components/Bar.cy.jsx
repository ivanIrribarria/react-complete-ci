import Bar from './Bar'
import {lightTheme} from "../themes/light.theme";
import {darkTheme} from "../themes/dark.theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import items from "../fixtures/global";

describe('<SimpleContainer /> light theme default', () => {
    it('renders', () => {
        cy.mount(
            <ThemeProvider theme={lightTheme}>
                <CssBaseline/>
                <Bar/>
            </ThemeProvider>)
        cy.getBySelId('header-title').contains(items.appName)
    })
})

describe('<SimpleContainer /> light theme new name', () => {
    it('renders', () => {
        cy.mount(
            <ThemeProvider theme={lightTheme}>
                <CssBaseline/>
                <Bar text={items.alternativeAppName}/>
            </ThemeProvider>)
        cy.getBySelId('header-title').contains(items.alternativeAppName)
    })
})

describe('<SimpleContainer /> dark theme default', () => {
    it('renders', () => {
        cy.mount(
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <Bar/>
            </ThemeProvider>)
        cy.getBySelId('header-title').contains(items.appName)
    })
})

describe('<SimpleContainer /> dark theme new name', () => {
    it('renders', () => {
        cy.mount(
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <Bar text={items.alternativeAppName}/>
            </ThemeProvider>)
        cy.getBySelId('header-title').contains(items.alternativeAppName)
    })
})