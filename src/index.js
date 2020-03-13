import React from 'react';
import ReactDOM from 'react-dom';
import { RendererProvider } from "react-fela";
import { createRenderer } from "fela";
import App from "./components/App";
// import * as serviceWorker from './serviceWorker';
import "./styles/main.css";

const renderer = createRenderer();

ReactDOM.render(
    <RendererProvider renderer={renderer}>
        <App />
    </RendererProvider>,
    document.getElementById("root"));

// serviceWorker.register();
