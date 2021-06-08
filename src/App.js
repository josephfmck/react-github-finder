import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import User from "./components/users/User";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import About from "./components/pages/About";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

//*main css for every component
import "./App.css";

//* pass in props
const App = () => {
  //* Create State

  //* Methods

  //* IN RETURN: JS {}, COMMENT {/* */}
  return (
    // * Wrap in GithubState Provider to use ContextAPI
    <GithubState>
      <AlertState>
        {/* //* Wrap in Router to use routes */}
        <Router>
          <div className='App'>
            <Navbar title='Github Binder' />
            <div className='container'>
              <Alert />
              {/* Switch show one Route at a time */}
              <Switch>
                {/* Route home exact path /, render  */}
                <Route exact path='/' component={Home} />
                {/* About Route, 1 component with no props so no render, just component={About}*/}
                <Route exact path='/about' component={About} />

                {/* User Route, login=username passed in */}
                {/* () implicit return */}
                {/* ...props all props from API user state obj */}
                {/* set userProp=userState */}
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
