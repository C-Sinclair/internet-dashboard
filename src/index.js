import React from 'react';
import ReactDOM from 'react-dom';
import { RendererProvider, ThemeProvider } from "react-fela";
import { createRenderer } from "fela";
import App from "./components/App";
import theme from './styles/theme'
import "./styles/main.css";

const renderer = createRenderer();

ReactDOM.render(
    <RendererProvider renderer={renderer}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </RendererProvider>,
    document.getElementById("root"));

