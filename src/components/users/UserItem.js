import React, { Component } from "react";

//* dont need export because its below already
class UserItem extends Component {
  //*obj to track data
  state = {
    id: "id",
    login: "mojombo",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
  };

  render() {
    //? dont have to use {this.state}
    //*Destructure state's props
    const { login, avatar_url, html_url } = this.state;

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
          >{`${this.state.html_url}`}</a>
        </div>
      </div>
    );
  }
}

export default UserItem;
