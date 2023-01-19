import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "../src/themes/dark.theme";
import { lightTheme } from "../src/themes/light.theme";
import { useMemo } from "react";

const THEMES = {
    light: lightTheme,
    dark: darkTheme,
};

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        expanded: true, // Adds the description and default columns
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const globalTypes = {
    theme: {
        name: "Theme",
        title: "Theme",
        description: "Theme for your components",
        defaultValue: "light",
        toolbar: {
            icon: "paintbrush",
            dynamicTitle: true,
            items: [
                { value: "light", left: "☀️", title: "Light mode" },
                { value: "dark", left: "🌙", title: "Dark mode" },
            ],
        },
    },
};

export const withMuiTheme = (Story, context) => {
    // The theme global we just declared
    const { theme: themeKey } = context.globals;

    // only recompute the theme if the themeKey changes
    const theme = useMemo(() => THEMES[themeKey] || THEMES["light"], [themeKey]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Story />
        </ThemeProvider>
    );
};

export const decorators = [withMuiTheme];