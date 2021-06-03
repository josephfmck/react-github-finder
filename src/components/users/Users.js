import React, { useContext } from "react";
//* grab to add props to this component, Users.js is a parent/wrapper to UserItem
import UserItem from "./UserItem";
//* grab Spinner, Users.js is Spinner's wrapper
import Spinner from "../layout/Spinner";
//? short: impt
import PropTypes from "prop-types";
import githubContext from "../../context/github/githubContext";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  //* init state
  const githubContext = useContext(GithubContext);

  //*destructure githubState
  const { loading, users } = githubContext;

  //* IF loading render Spinner, IF done loading render divs
  if (loading) {
    return <Spinner />;
  } else {
    //? REPLACE {this.state} with {this.props} to grab Users.js API props from App.js, Destructure REPLACE this.props.users to users
    //? Class to Functional: Remove render()
    return (
      <div style={userStyle}>
        {/* loop create user divs */}
        {users.map((u) => (
          // key attr for unique check
          // pass in u as a prop called user
          //*Userprop for each
          <UserItem key={u.id} user={u} />
        ))}
      </div>
    );
  }
};

//* Declare inline styles, This will be a wrapper grid
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1rem",
};

export default Users;
