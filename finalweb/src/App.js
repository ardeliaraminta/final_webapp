import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/landing'
import { createTheme, ThemeProvider } from "@material-ui/core";
import Inter from './assets/Inter/Inter-Regular.ttf';

const theme = createTheme({
    palette: {
      primary: {
        main: "#273250",
      },
      secondary: {
        main: '#08143D',
      },
    },
  
    typography: {
      fontFamily: 'Inter, Arial',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Inter'), url(${Inter}) format('ttf');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  });

export default function App() {
    

    return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>}/>
        </Routes>
      </Router>
  )
}