import React, { Component } from "react";
//? No state, needs to use LifeCycle ComponentDidMount() to exec getUserMethod in App.js

export class user extends Component {
  //*Exec when component loaded
  componentDidMount() {
    //*this.props.match.params.login pulled from URL path='/user/:login' matching login param
    this.props.getUserMethodAppJSProp(this.props.match.params.login);
  }

  render() {
    //* Destructure from user prop obj
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    //grab from props
    const { loading } = this.props;
    return <div>{name}</div>;
  }
}

export default user;
