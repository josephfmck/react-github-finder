import React from "react";
import PropTypes from "prop-types";

//?pass in prop from <Repos/>
const RepoItem = ({ repoPropReposJS }) => {
  return (
    <div className='card'>
      <h3>
        <a href={repoPropReposJS.html_url}>{repoPropReposJS.name}</a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repoPropReposJS: PropTypes.object.isRequired,
};

export default RepoItem;
