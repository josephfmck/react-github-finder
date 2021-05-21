import React from "react";
import PropTypes from "prop-types";

//?pass in prop from <Repos/>
const RepoItem = ({ repoProp }) => {
  return (
    <div className='card'>
      <h3>
        <a href={repoProp.html_url}>{repoProp.name}</a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repoProp: PropTypes.object.isRequired,
};

export default RepoItem;
