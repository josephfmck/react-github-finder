//* import React so extends work for class
//? By destructuring Component from React at import
import React, { Component, Fragment } from "react";
//main css for every component
import "./App.css";

//*MAIN APP COMPONENT is render through #root
//*For class to work need to extend with React component

class App extends Component {
  //* Methods GO HERE as part of the class, have to use 'this'

  render() {
    //* COMMENT GO HERE
    //* Can add DOM JS IN RETURN with {}

    return (
      <div className='App'>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
