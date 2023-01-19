import * as React from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import SimpleContainer from "./components/Container";
import Bar from "./components/Bar";
import items from "./fixtures/global";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#3f51b5'
        },
        secondary: {
            main: '#416596'
        },
        background: {
            default: '#192231',
            paper: '#24344d'
        }
    },
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Bar text={items.appName}></Bar>
            <SimpleContainer></SimpleContainer>
        </ThemeProvider>
    );
}