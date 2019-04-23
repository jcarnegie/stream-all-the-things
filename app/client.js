import React from 'react'
import ReactDOM from 'react-dom'
import { rehydrateMarks } from 'react-imported-component';
import App from './App'
import importedComponents from './imported'; // eslint-disable-line
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GlobalStyles } from "./styles";

console.log("GlobalStyles:", GlobalStyles);

const element = document.getElementById('app')
const app = (
  <HelmetProvider>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

ReactDOM.render(app, element)

// Enable Hot Module Reloading
if (module.hot) {
    module.hot.accept();
}
