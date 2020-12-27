// this file is the main entry point for the application

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// commented this without instruction
import reportWebVitals from './reportWebVitals';

// added this without instruction
// import * as serviceWorker from './serviceWorker';

// The ReactDOM library is rendering the App component at the root element in the HTML.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// commented this without instruction
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// added this without instruction
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();