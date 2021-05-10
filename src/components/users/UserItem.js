import React, { Component } from "react";

//* dont need export because its below already
class UserItem extends Component {
  //?REPLACED state with this.props.user TO GRAB Users.js state
  // //*obj to track data
  // state = {
  //   id: "id",
  //   login: "mojombo",
  //   avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
  //   html_url: "https://github.com/mojombo",
  // };

  render() {
    //? dont have to use {this.state} in render()
    //*Destructure state's props
    const { login, avatar_url, html_url } = this.props.user;

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
  }
}

export default UserItem;
