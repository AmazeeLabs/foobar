// Files that should be linted.
const eslintPattern = /.*.(ts|js|tsx|jsx)$/;
// Files that should be formatted.
const prettierPattern =
  /.*.(ts|js|tsx|jsx|gql|graphql|graphqls|php|module|install|md|yml|yaml|json)$/;

module.exports = (allStagedFiles) => {
  const lint = allStagedFiles.filter((file) => eslintPattern.test(file));
  const format = allStagedFiles.filter((file) => prettierPattern.test(file));

  return ['prettier -w ' + format.join(' '), 'eslint --fix ' + lint.join(' ')];
};