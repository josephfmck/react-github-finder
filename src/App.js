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
  //* Set State
  //? while fetching loading: true, once fetched false
  state = {
    users: [],
    loading: false,
  };

  //* Class Methods GO HERE, have to use 'this'

  //* Lifecycle Method: exec when component mounted
  async componentDidMount() {
    console.log("App Component Mounted");
    console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

    //* Set State, true = fetching
    this.setState({ loading: true });

    //* PLACE HTTP Request WHEN App Loads HERE
    //*Get 1st 30 users
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log(res.data);

    //* Set State, AFTER FETCH
    //? Now users = API data
    this.setState({ users: res.data, loading: false });
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
          {/* pass state as Users props */}
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
