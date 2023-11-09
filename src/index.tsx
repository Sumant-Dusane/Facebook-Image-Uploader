import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { Container, CssBaseline, Hidden, createTheme } from '@mui/material';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme()}>
      <Container component="main">
        <CssBaseline />
        <App />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);