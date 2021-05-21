import React, { Component, Fragment } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//? No state, needs to use props
export class user extends Component {
  //*Exec when component loaded
  componentDidMount() {
    //*this.props.match.params.login pulled from URL path='/user/:login' passed in and exec with getUser
    //? props from <App/>
    this.props.getUserMethodAppJSProp(this.props.match.params.login);
    this.props.getUserReposMethodAppJSProp(this.props.match.params.login);
  }

  //* props all from <App/>
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUserMethodAppJSProp: PropTypes.func.isRequired,
    getUserReposMethodAppJSProp: PropTypes.func.isRequired,
    reposPropAppJS: PropTypes.array.isRequired,
  };

  render() {
    //* Destructure from user prop obj
    const {
      name,
      company,
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
    const { loading, reposPropAppJS } = this.props;

    //spinner when true
    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        {/* {' '} is just a space */}
        {/* true show check, else X mark */}
        Hireable:{" "}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: {login}</strong>
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: {company}</strong>
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: {blog}</strong>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-light'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
        <Repos reposPropUserJS={reposPropAppJS} />
      </Fragment>
    );
  }
}

export default user;
