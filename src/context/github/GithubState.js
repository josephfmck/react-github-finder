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

  //* returns [ state from initialState passed in, dispatch - func call to update state, calls reducer given certain params ]
  //* useReducer(reducer - func that performs on state to get new state, initialState obj )
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //*Actions
  //action makes request to API then
  //dispatch a type back to reducer
  //* Submit Event Handler, searches API users with form text
  const searchUsersMethodAppJS = async (searchText) => {
    console.log(`searchUserMethodAppJS(${searchText})`);

    //*exec dispatched SET_LOADING from Reducer
    //sets loading state = true, SEARCH_USERS action will set back to false after api call
    setLoading();

    //* Search with text, and endpoint search
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log(res);

    //*Dispatches SEARCH_USERS with API data
    //*reducer will put data into state and sending it down to components
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  //* Get single Github user
  const getUserMethodAppJS = async (username) => {
    setLoading();

    //* Search with text, /users/username
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log("getUser res", res);

    //* Set user obj State, AFTER FETCH
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //* Get user's repos
  const getUserReposMethodAppJS = async (username) => {
    setLoading();

    //* Search repos endpoint, 5 per page, sort by most recent (ascending)
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    console.log("getUserRepos res", res);

    //* Set repos arr State, AFTER FETCH
    dispatch({ type: GET_REPOS, payload: res.data });
  };

  //* Clear users
  const clearUsersMethodAppJS = () => {
    //clear users and dont render loading img
    dispatch({
      type: CLEAR_USERS,
    });
  };

  //*  Set Loading - sets Loading state
  //dispatch to githubReducer - obj has to have type
  const setLoading = () => dispatch({ type: SET_LOADING });

  //* return provider
  //wrap state with Provider to use state
  //value prop - context - all state available to entire app
  //everything wrapped with provider has access to value prop
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsersMethodAppJS,
        clearUsersMethodAppJS,
        getUserMethodAppJS,
        getUserReposMethodAppJS,
      }}
    >
      {/* children */}
      {props.children}
      {`GithubState.js props.children - ${console.log(props.children)}`}
    </GithubContext.Provider>
  );
};

export default GithubState;
