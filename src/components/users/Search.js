import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  //*Init githubContext with hook
  //*allows to grab searchUser instead of passing in as prop
  const githubContext = useContext(GithubContext);
  //* init alertContext
  const alertContext = useContext(AlertContext);

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
      alertContext.setAlertMethodAppJS("Please enter something", "light");
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
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsersMethodAppJS}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
