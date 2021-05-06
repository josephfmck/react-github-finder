//react framework library
import React from "react";
//renders to browser DOM
import ReactDOM from "react-dom";
import "./index.css";
//Main App component - App.js
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//render method - takes in WHAT you want to render <App /> and WHERE to render "root"
//<React.StrictMode> is for highlighting potential problems
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
