import React from "react";

//* takes in alert obj from <App/>'s state
//* In <App/> pass in alertProp as prop, <Alert alert="this.state.alert/>
const Alert = ({ alertProp }) => {
  return (
    //* if alert not null then show div, else nothing
    alertProp !== null && (
      <div className={`alert alert-${alertProp.type}`}>
        <i className='fas fa-info-circle'></i> {alertProp.msg}
      </div>
    )
  );
};

export default Alert;
