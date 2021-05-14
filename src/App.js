//* 1ST import React so extends work for class
//? By destructuring Component from React at import
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//* COMPONENTS
import Navbar from "./components/layout/Navbar";
// import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
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
    alert: null,
    user: {},
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

    this.setState({ loading: true });

    //* Search with text, and different endpoint search
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log(res);

    //* Set users State, AFTER FETCH
    //? data.items
    this.setState({ users: res.data.items, loading: false });
  };

  //* Get single Github user
  getUserMethodAppJS = async (username) => {
    this.setState({ loading: true });

    //* Search with text, /users/username
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log(res);

    //* Set user obj State, AFTER FETCH
    this.setState({ user: res.data, loading: false });
  };

  //* Clear users from State
  clearUsersMethodAppJS = () => {
    //clear users and dont render loading img
    this.setState({ users: [], loading: false });
  };

  //* Set Alert
  setAlertMethodAppJS = (msg, type) => {
    //* Set alert state to obj msg: msg passed in
    this.setState({ alert: { msg: msg, type: type } });

    //* Clear alert obj after 5 secs
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  //* Lifecycle Method: render()
  render() {
    //* Destructure Props and State HERE
    const { users, loading, user } = this.state;

    //* IN RETURN: JS {}, COMMENT {/* */}
    return (
      //* Wrap in Router to use routes
      <Router>
        <div className='App'>
          <Navbar title='Github Binder' />
          <div className='container'>
            {/* pass in alert state as prop */}
            <Alert alertProp={this.state.alert} />
            {/* Switch show one Route at a time */}
            <Switch>
              {/* Route home exact path /, render  */}
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    {/* prop methods passed up from <Search/> */}
                    <Search
                      searchUsersMethodAppJSProp={this.searchUsersMethodAppJS}
                      clearUsersMethodAppJSProp={this.clearUsersMethodAppJS}
                      showClearBtnBoolProp={users.length > 0 ? true : false}
                      setAlertMethodAppJSProp={this.setAlertMethodAppJS}
                    />
                    {/* pass state as Users props */}
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              {/* About Route, 1 component with no props so no render, just component={About}*/}
              <Route exact path='/about' component={About} />
              {/* User Route, login=username passed in, render needed since using props */}
              {/* () is an implicit return */}
              {/* ...props all props passed in */}
              {/* set userProp=userState */}
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User
                    {...props}
                    getUserMethodAppJSProp={this.getUserMethodAppJS}
                    user={user}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
