//* shorthand:    rce ~press enter~
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//? To Use fontawesome icon: in public/index.html add link

//* Destructure from Navbar (props)
const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        {/* Grab Navbar Prop 'title' from App.js using {props.title} */}
        <i className={icon}></i> {title}
      </h1>
      {/* Nav Links: DONT USE aTags */}
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

//? Class Component: Default and PropTypes placed inside Component
//* Functional Component: Default and PropTypes placed outside of Component
//* Default props: when in App.js <Navbar /> has no props written
//? static replaced with Navbar.defaultProps
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

//* Checks props for required type 'str','obj' etc.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
