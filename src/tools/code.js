export default {
  js: str => str.trim().replace(/\s{5}/g, '\n'),
  bash: str => str.trim().replace(/\s{5}/g, '\n'),
};
