import React, { Component } from "react";

//* dont need export because its below already
class UserItem extends Component {
  //*Constructor: Function that runs when component runs
  constructor() {
    //*super(); NEED for constructor fires off as soon as component loads
    super();
    console.log(123);

    //*obj to track data
    this.state = {
      id: "id",
      login: "mojombo",
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo",
    };
  }

  render() {
    return <div className='card text-center'>UserItem</div>;
  }
}

export default UserItem;
