import React, { Component } from "react";
//* grab to add props to this component, Users.js is a parent/wrapper to UserItem
import UserItem from "./UserItem";

export class Users extends Component {
  //?REPLACE State with API data Props passed in from App.js
  // state = {
  //   users: [
  //     {
  //       id: "id",
  //       login: "mojombo",
  //       avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
  //       html_url: "https://github.com/mojombo",
  //     },
  //   ],
  // };

  //? REPLACE {this.state} with {this.props} to grab Users.js API props from App.js
  render() {
    return (
      <div style={userStyle}>
        {/* loop create user divs */}
        {this.props.users.map((u) => (
          // key attr for unique check
          // pass in u as a prop called user
          //*Userprop for each
          <UserItem key={u.id} user={u} />
        ))}
      </div>
    );
  }
}

//* Declare inline styles, This will be a wrapper grid
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "1rem",
};

export default Users;
