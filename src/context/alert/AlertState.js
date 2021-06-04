//Init State
//actions like search users from github
import React, { useReducer } from "react";
import axios from "axios";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  //* only one piece of state {"alerts: null"} so just null
  const initialState = null;

  //* sets up useReducer(reducer - func updates state)
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //*Actions/methods

  //* Set Alert

  //* context Provider allows access to State from any Comp using value
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlertMethodAppJS,
      }}
    >
      {/* children */}
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
