//* import React so extends work for class
//? By destructuring Component from React at import
import React, { Component, Fragment } from "react";
//main css for every component
import "./App.css";

//*MAIN APP COMPONENT is render through #root
//Components can be functions (like here) OR Classes
//Class component: can have state
//function component: need hooks for state

//changed func to class
//*For class to work need to extend with React component
//? Replace: extends React.Component
class App extends Component {
  //*class needs render() method to return
  //lifecycle method
  render() {
    //*NOT HTML ACTUALLY JSX
    //HTML : JSX
    // class : className, label's for : htmlFor
    //everything needs to be wrapped in 1 parent el: 'App'
    //? Not want parent to be div? Replace: parent div App with React.Fragment. ALSO could just use <> but comes with issues
    return (
      <div className='App'>
        <h1>Hello from React</h1>
      </div>
    );
  }
}

export default App;
