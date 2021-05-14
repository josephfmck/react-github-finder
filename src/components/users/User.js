import React, { Component } from "react";
//? No state, needs to use LifeCycle ComponentDidMount() to exec getUserMethod in App.js

export class user extends Component {
  //*Exec when component loaded
  componentDidMount() {
    //*this.props.match.params.login pulled from URL path='/user/:login' matching login param
    this.props.getUserMethodAppJSProp(this.props.match.params.login);
  }

  render() {
    return <div>User</div>;
  }
}

export default user;
