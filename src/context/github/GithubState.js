//Init State
//actions like search users from github
import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

//func
//Initialize State, includes all actions
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  //action makes request to API then
  //dispatch a type back to reducer
  //* returns [ state from initialState passed in, dispatch - func call to update state, calls reducer given certain params ]
  //* useReducer(reducer - func that performs on state to get new state, initialState obj )
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //*Actions
  //  Search Users

  //  Get User

  //  Get Repos

  //  Clear Users

  //  Set Loading

  //* return provider
  //wrap entire app with Provider
  //value prop - context - everything available to entire app
  //everything wrapped with provider has access to value prop
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {/* children */}
      {props.children}
      {`GithubState.js props.children - ${console.log(props.children)}`}
    </GithubContext.Provider>
  );
};

export default GithubState;
