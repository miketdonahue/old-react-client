import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import Perf from 'react-addons-perf';

// Used to check performace of React components and rendering speed
// window.Perf = Perf;
// Perf.start();

const renderApp = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
