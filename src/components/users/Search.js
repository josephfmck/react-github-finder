import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  //* When using a Form, Want to attach State to inputs
  state = {
    text: "",
  };

  //?Class Needs static for propTypes
  static propTypes = {
    searchUsersMethodAppJSProp: PropTypes.func.isRequired,
    clearUsersMethodAppJSProp: PropTypes.func.isRequired,
    showClearBtnBoolProp: PropTypes.bool.isRequired,
    setAlertMethodAppJSProp: PropTypes.func.isRequired,
  };

  //* EVENTS
  //*OnChange Event, type into search input
  //? if have lots of inputs: name, email, etc.
  //* Use name attr to set all [e.target.name], [] to dynamic update object properties
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //* Submit Event
  onSubmit = (e) => {
    e.preventDefault();

    //* Check search text not empty, light type alert
    if (this.state.text === "") {
      //* setAlert() prop from <Search/> in <App/>
      this.props.setAlertMethodAppJSProp("Please enter something", "light");
    } else {
      console.log(`Search Form Text ${this.state.text}`);
      // PASS this.state.text UP to <App/>.
      //* GRABING/USING <App/>'s method
      //TODO In <App/>: <Search searchUsers={this.searchUsersMethodAppJS}/>
      //*passing UP this.state.text? as a Prop
      this.props.searchUsersMethodAppJSProp(this.state.text);

      //clear state / form input's text
      this.setState({ text: "" });
    }
  };

  render() {
    //* Destructure return's <Search/> props
    const { showClearBtnBoolProp, clearUsersMethodAppJSProp } = this.props;

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
  }
}

export default Search;
