//ES7 React snippets Extension shortcut
//* shorthand:    rce ~press enter~
//?creates this class component
import React, { Component } from "react";

//? To Use fontawesome icon: in public/index.html add link

export class Navbar extends Component {
  //* Default props: when in App.js <Navbar /> has no props written
  //? static does what?
  //* defaultProps obj: Access to Props not included in App.js <Navbar />
  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github",
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          {/* Grab Navbar Prop 'title' from App.js using {this.props.title} */}
          <i className={this.props.icon}></i> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
