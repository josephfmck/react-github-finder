//* 1ST import React so extends work for class
//? By destructuring Component from React at import
import React, { Component, Fragment } from "react";
//* COMPONENTS
import Navbar from "./components/layout/Navbar";
// import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";
import axios from "axios";

//*LAST main css for every component
import "./App.css";

//*For class to work need to extend with React component

class App extends Component {
  //* Methods GO HERE as part of the class, have to use 'this'

  //* Lifecycle Method: exec when component mounted
  async componentDidMount() {
    //* PLACE HTTP Request WHEN App Loads HERE
    console.log("App Component Mounted");
    //*Get 1st 30 users
    const res = await axios.get("https://api.github.com/users");

    console.log(res.data);
  }

  //* Lifecycle Method: render()
  render() {
    //* IN RETURN: JS {}, COMMENT {/* */}

    return (
      <div className='App'>
        {/* <Navbar title='Github Finder' icon='fab fa-github' /> */}

        {/** Default Props: when title and icon are not written, When 'title'="Github Binder" written it overwrites default title*/}
        <Navbar title='Github Binder' />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
