//react framework library
import React from "react";
//renders to browser DOM
import ReactDOM from "react-dom";
//Main App component - App.js
import App from "./App";

//render method - takes in WHAT you want to render <App /> and WHERE to render "root"
//<React.StrictMode> is for highlighting potential problems
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
