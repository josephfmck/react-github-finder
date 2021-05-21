import React from "react";
import PropTypes from "prop-types";

//reposProp from
//*map through each repo and create RepoItem passing in each repo as repoProp
const Repos = ({ reposProp }) => {
  return reposProp.map((repo) => <RepoItem repoProp={repo} key={repo.id} />);
};

Repos.propTypes = {
  reposProp: PropTypes.array.isRequired,
};

export default Repos;
