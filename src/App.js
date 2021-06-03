import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import axios from "axios";

import GithubState from "./context/github/GithubState";
//*main css for every component
import "./App.css";

//* pass in props
const App = () => {
  //* Create State
  //users = [], set = setState
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //* Methods

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
    // * Wrap in GithubState Provider to use ContextAPI
    <GithubState>
      {/* //* Wrap in Router to use routes */}
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
                    <Search setAlertMethodAppJSProp={setAlertMethodAppJS} />
                    {/* app state props replaced with githubState  */}
                    <Users />
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
    </GithubState>
  );
};

export default App;
