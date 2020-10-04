import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000");
})

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
