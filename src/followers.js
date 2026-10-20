module.exports = async function followers({ github, username, limit = 5 }) {
  const users = await github.paginate(github.rest.users.listFollowersForUser, {
    username,
    per_page: 100,
  });

  return users.slice(0, limit).map((user) => ({
    login: user.login,
    url: user.html_url,
  }));
};
