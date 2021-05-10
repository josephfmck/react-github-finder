//* shorthand:    rce ~press enter~
//?creates this class component
import React from "react";
import PropTypes from "prop-types";

//? To Use fontawesome icon: in public/index.html add link

//* Destructure from Navbar (props)
const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        {/* Grab Navbar Prop 'title' from App.js using {props.title} */}
        <i className={icon}></i> {title}
      </h1>
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
