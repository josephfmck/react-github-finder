//ES7 React snippets Extension shortcut
//* shorthand:    rce ~press enter~
//?creates this class component
import React, { Component } from "react";

//? To Use fontawesome icon: in public/index.html add link

//* Grab Navbar Prop 'title' from App.js using {this.props.title}

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon}></i> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
