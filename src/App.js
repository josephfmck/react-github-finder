import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import axios from "axios";
//*main css for every component
import "./App.css";

//* pass in props
const App = () => {
  //* State
  //users = [], set = setState
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //* Methods

  //* Submit Event Handler, searches API users with form text
  const searchUsersMethodAppJS = async (searchText) => {
    console.log(`searchUserMethodAppJS(${searchText})`);

    setLoading(true);

    //* Search with text, and different endpoint search
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log(res);

    //* Set users State, AFTER FETCH
    //? data.items from API
    setUsers(res.data.items);
    setLoading(false);
  };

  //* Get single Github user
  const getUserMethodAppJS = async (username) => {
    setLoading(true);

    //* Search with text, /users/username
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log("getUser res", res);

    //* Set user obj State, AFTER FETCH
    setUser(res.data);
    setLoading(false);
  };

  //* Get user's repos
  const getUserReposMethodAppJS = async (username) => {
    setLoading(true);

    //* Search repos endpoint, 5 per page, sort by most recent (ascending)
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log("getUserRepos res", res);

    //* Set repos arr State, AFTER FETCH
    setRepos(res.data);
    setLoading(false);
  };

  //* Clear users from State
  const clearUsersMethodAppJS = () => {
    //clear users and dont render loading img
    setUsers([]);
    setLoading(false);
  };

  //* Set Alert
  const setAlertMethodAppJS = (msg, type) => {
    //* Set alert state to obj of msg and type
    setAlert({ msg: msg, type: type });

    //* Clear alert obj after 5 secs
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  //* IN RETURN: JS {}, COMMENT {/* */}
  return (
    //* Wrap in Router to use routes
    <Router>
      <div className='App'>
        <Navbar title='Github Binder' />
        <div className='container'>
          {/* pass in alert state as prop */}
          <Alert alertProp={alert} />
          {/* Switch show one Route at a time */}
          <Switch>
            {/* Route home exact path /, render  */}
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  {/* methods passed in to <Search/> props */}
                  <Search
                    searchUsersMethodAppJSProp={searchUsersMethodAppJS}
                    clearUsersMethodAppJSProp={clearUsersMethodAppJS}
                    showClearBtnBoolProp={users.length > 0 ? true : false}
                    setAlertMethodAppJSProp={setAlertMethodAppJS}
                  />
                  {/* pass state as Users props */}
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            {/* About Route, 1 component with no props so no render, just component={About}*/}
            <Route exact path='/about' component={About} />

            {/* User Route, login=username passed in, render needed since using props */}
            {/* () implicit return */}
            {/* ...props all props from API user state obj */}
            {/* set userProp=userState */}
            {/* getUser(loginProp) execs inside User.js setting user State to API data; THEN pass user State in as prop for <User/> to use */}
            <Route
              exact
              path='/user/:login'
              render={(props) => (
                <User
                  {...props}
                  getUserMethodAppJSProp={getUserMethodAppJS}
                  user={user}
                  loading={loading}
                  getUserReposMethodAppJSProp={getUserReposMethodAppJS}
                  reposPropAppJS={repos}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
