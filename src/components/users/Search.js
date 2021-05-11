import React, { Component } from "react";

export class Search extends Component {
  //* When using a Form, Want to attach State to inputs
  state = {
    text: "",
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

    console.log(this.state.text);
  };

  render() {
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
      </div>
    );
  }
}

export default Search;
