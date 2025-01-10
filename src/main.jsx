import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import './index.css';
import App from './App.jsx';

const theme = createTheme({
    typography: {
        fontFamily: 'inherit',
    },
    palette: {
        primary: {
            main: '#9fa9a3'
        },
        secondary: {
            main: '#c5d5c5'
        },
        light: {
            main: '#e3e0cc'
        },
        dark: {
            main: '#272727'
        }
    },
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </StrictMode>
);
