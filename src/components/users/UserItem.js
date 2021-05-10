import React from "react";

//* Switch from Class to Function Component
//* Functional Component: Doesn't need render(), Don't use this.props to grab props, instead pass in (props)
const UserItem = (props) => {
  //*Destructure Users.js props
  const { login, avatar_url, html_url } = props.user;

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
        <a
          href={html_url}
          className='btn btn-dark btn-sm my-1'
        >{`${html_url}`}</a>
      </div>
    </div>
  );
};

export default UserItem;
