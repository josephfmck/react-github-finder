import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";

//* props passed in
const User = ({ reposPropAppJS, getUserReposMethodAppJSProp, match }) => {
  //* Init global State
  const githubContext = useContext(GithubContext);

  //* Destructure global State
  const { getUserMethodAppJS, loading, user } = githubContext;

  //*Replace Lifecycle componentDidMount()
  //*Exec when component loaded
  //? useEffect will constantly run in loop so add [] for conditions to run once, or add state in there for when state is change
  useEffect(() => {
    //*match.params.login pulled from URL path='/user/:login'
    getUserMethodAppJS(match.params.login);
    getUserReposMethodAppJSProp(match.params.login);

    //? to remove eslint warning for methods to be dependencies [getuser, etc.]
    // eslint-disable-next-line
  }, []);

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
  } = user;

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
};

//* props all from <App/>
User.propTypes = {
  getUserReposMethodAppJSProp: PropTypes.func.isRequired,
  reposPropAppJS: PropTypes.array.isRequired,
};

export default User;
