//? short: racf   functional component
import React, { Fragment } from "react";
//* import img. Able to with webpack
import spinnerImg from "./spinner.gif";

//* When only one JS, can remove Arrows {return()}
const Spinner = () => (
  <Fragment>
    <img
      src={spinnerImg}
      alt='Loading...'
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </Fragment>
);

export default Spinner;
