import React, { Component } from "react";

export class Search extends Component {
  //* When using a Form, Want to attach State to inputs
  state = {
    text: "",
  };

  //*OnChange Event, to type into search input
  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <form className='form'>
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
