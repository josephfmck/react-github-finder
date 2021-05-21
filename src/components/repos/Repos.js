import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

//reposProp from <User/>
//*map through each repo and create RepoItem passing in each repo as repoProp
const Repos = ({ reposPropUserJS }) => {
  return reposPropUserJS.map((repo) => (
    <RepoItem repoPropReposJS={repo} key={repo.id} />
  ));
};

Repos.propTypes = {
  reposPropUserJS: PropTypes.array.isRequired,
};

export default Repos;
