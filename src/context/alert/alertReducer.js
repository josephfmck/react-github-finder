import { SET_ALERT, REMOVE_ALERT } from "../types";

//*IntialState passed in from <AlertState/>'s useReducer, action is method to use
export default (state, action) => {
  //*evaluate type
  switch (action.type) {
    case SET_ALERT:
      //payload msg, type
      //update alert: {msg, type}
      return action.payload;
    case REMOVE_ALERT:
      //update alert: null
      return null;
    //return initialState
    default:
      return state;
  }
};
