//USING JS NOT A COMPONENT
//Reducer handles what to do with state when things happen

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

//Export reducer func
//*IntialState passed in from useReducer, action is method to use setLoading, SearchUsers() etc.
export default (state, action) => {
  //*evaluate type
  switch (action.type) {
    case SEARCH_USERS:
      return {
        //fill users with payload res.data
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        //make copy and change state
        ...state,
        loading: true,
      };
    //return initialState
    default:
      return state;
  }
};
