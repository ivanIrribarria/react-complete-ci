import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

export default function SimpleContainer() {
    const theme = useTheme();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: theme.background, height: '100vh' }} />
            </Container>
        </React.Fragment>
    );
}