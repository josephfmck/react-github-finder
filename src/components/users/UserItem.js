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
    return (
      <div className='card text-center'>
        {/* grabs state */}
        <img
          src={this.state.avatar_url}
          alt=''
          className='round-img'
          style={{ width: "60px" }}
        />
        <h3>{this.state.login}</h3>
        <div>
          <a
            href={this.state.html_url}
            className='btn btn-dark btn-sm my-1'
          >{`${this.state.html_url}`}</a>
        </div>
      </div>
    );
  }
}

export default UserItem;
