//* 1ST import React so extends work for class
//? By destructuring Component from React at import
import React, { Component, Fragment } from "react";
//* COMPONENTS
import Navbar from "./components/layout/Navbar";
// import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
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

  //* Submit Event Handler, searches API users with form text
  searchUsersMethodAppJS = async (searchText) => {
    console.log(`searchUserMethodAppJS(${searchText})`);

    //* Search with text, and different endpoint search
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    //* Set State, AFTER FETCH
    //? data.items
    this.setState({ users: res.data.items, loading: false });
  };

  //* Lifecycle Method: render()
  render() {
    //* IN RETURN: JS {}, COMMENT {/* */}

    return (
      <div className='App'>
        <Navbar title='Github Binder' />
        <div className='container'>
          <Search searchUsersMethodAppJSProp={this.searchUsersMethodAppJS} />
          {/* pass state as Users props */}
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
