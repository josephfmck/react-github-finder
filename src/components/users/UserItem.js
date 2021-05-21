import React from "react";
//*SINCE ({user prop}) passed in, NEED UserItem.js propTypes
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//* Switch from Class to Function Component
//* Functional Component: Doesn't need render(), Don't use this.props to grab props, instead pass in (props)
//* Destructure User.js props: {user: { login, etc. }} FROM App.js
//? Destructure prop from <Users/>
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  //*? REPLACE Destructure Users.js props
  //const { login, avatar_url, html_url } = props.user;

  return (
    <div className='card text-center'>
      {/* grabs state */}
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        {/* change to Link to User.js login=username passed in=prop of user propObj from App.js State */}
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

//* PropTypes needed when grabbing User.js props
//* Check User.js props are right types
//? user not users cuz it is passed in as user in Users.js map()
//short: ptor = PropTypes.object.isRequired
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
