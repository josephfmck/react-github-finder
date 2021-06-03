//USING JS NOT A COMPONENT
//Reducer updates state based on type of action

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
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    //return initialState
    default:
      return state;
  }
};
