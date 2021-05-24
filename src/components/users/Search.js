import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({
  searchUsersMethodAppJSProp,
  showClearBtnBoolProp,
  clearUsersMethodAppJSProp,
}) => {
  //Destructure State,    text=state setText=method to change state
  // set text to "" with useState, NOW we can use
  const [text, setText] = useState("");

  //* EVENTS
  //*OnChange Event, type into search input
  //? if have lots of inputs: name, email, etc.
  //* Use name attr to set all [e.target.name], [] to dynamic update object properties
  const onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //* Check search text not empty, light type alert
    if (this.state.text === "") {
      //* setAlert() <Search/> prop from <App/>
      this.props.setAlertMethodAppJSProp("Please enter something", "light");
    } else {
      console.log(`Search Form Text ${this.state.text}`);
      //*exec with this.state.text
      this.props.searchUsersMethodAppJSProp(this.state.text);

      //clear form input's text
      this.setState({ text: "" });
    }
  };

  return (
    <div>
      {/* onSubmit Event exec onSubmit() */}
      <form onSubmit={this.onSubmit} className='form'>
        {/* set text val to state, NEED onchange event to change text/state  */}
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={this.state.text}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {/* sending this clear method UP to <App/> */}
      {/* ternary if showClear true render btn */}
      {showClearBtnBoolProp && (
        <button
          className='btn btn-light btn-block'
          onClick={clearUsersMethodAppJSProp}
        >
          Clear
        </button>
      )}
    </div>
  );
};

//Refact: move propTypes outside
Search.propTypes = {
  searchUsersMethodAppJSProp: PropTypes.func.isRequired,
  clearUsersMethodAppJSProp: PropTypes.func.isRequired,
  showClearBtnBoolProp: PropTypes.bool.isRequired,
  setAlertMethodAppJSProp: PropTypes.func.isRequired,
};

export default Search;
