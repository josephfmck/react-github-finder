//* 1ST import React so extends work for class
//? By destructuring Component from React at import
import React, { Component, Fragment } from "react";
//* import components before CSS
//Navbar component
import Navbar from "./components/layout/Navbar";

//*LAST main css for every component
import "./App.css";

//*MAIN APP COMPONENT is render through #root
//*For class to work need to extend with React component

class App extends Component {
  //* Methods GO HERE as part of the class, have to use 'this'

  render() {
    //* COMMENT GO HERE
    //* Can add DOM JS IN RETURN with {}
    //add components with < ComponentName/>

    //For Nav: switch wrap div to navTag
    //? To Use fontawesome icon: in public/index.html add link
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className='fab fa-github'></i>Navbar
        </h1>
      </nav>
    );
  }
}

export default App;
