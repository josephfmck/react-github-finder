import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  //*Init context
  const alertContext = useContext(AlertContext);

  //* Destructure alert state
  const { alert } = alertContext;

  return (
    //* if alert not null then show div, else nothing
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i> {alert.msg}
      </div>
    )
  );
};

export default Alert;
