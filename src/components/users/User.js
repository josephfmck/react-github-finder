import React, { Component, Fragment } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//? No state, needs to use props
export class user extends Component {
  //*Exec when component loaded
  componentDidMount() {
    //*this.props.match.params.login pulled from URL path='/user/:login' passed in and exec with getUser
    //? props from <App/>
    this.props.getUserMethodAppJSProp(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUserMethodAppJSProp: PropTypes.func.isRequired,
  };

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

    //spinner when true
    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
      </Fragment>
    );
  }
}

export default user;
