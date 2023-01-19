import {createTheme} from "@mui/material";

export const darkTheme = createTheme({
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