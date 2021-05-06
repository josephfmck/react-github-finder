//* import React so extends work for class
import React from "react";
//main css for every component
import "./App.css";

//*MAIN APP COMPONENT is render through #root
//Components can be functions (like here) OR Classes
//Class component: can have state
//function component: need hooks for state

//changed func to class
//*For class to work need to extend with React component
class App extends React.Component {
  //*class needs render() method to return
  //lifecycle method
  render() {
    //class for JS, className for JSX
    return (
      <div className='App'>
        <h1>Hello from React</h1>
      </div>
    );
  }
}

export default App;
