import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({
  showClearBtnBoolProp,
  clearUsersMethodAppJSProp,
  setAlertMethodAppJSProp,
}) => {
  //*Init githubContext with hook
  //*allows to grab searchUser instead of passing in as prop
  const githubContext = useContext(GithubContext);

  //Destructure State,    text=state setText=method to change state
  // set text to "" with useState, NOW we can use
  const [text, setText] = useState("");

  //* EVENTS
  //*OnChange Event, type into search input
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //* Check search text not empty, light type alert
    if (text === "") {
      //* setAlert() <Search/> prop from <App/>
      setAlertMethodAppJSProp("Please enter something", "light");
    } else {
      console.log(`Search Form Text ${text}`);
      //*exec with state text
      githubContext.searchUsersMethodAppJS(text);

      //clear form input's text
      setText("");
    }
  };

  return (
    <div>
      {/* onSubmit Event exec onSubmit() */}
      <form onSubmit={onSubmit} className='form'>
        {/* set text val to state, NEED onchange event to change text/state  */}
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
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
  clearUsersMethodAppJSProp: PropTypes.func.isRequired,
  showClearBtnBoolProp: PropTypes.bool.isRequired,
  setAlertMethodAppJSProp: PropTypes.func.isRequired,
};

export default Search;
