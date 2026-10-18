module.exports = async function recentRepositories({ github, username, limit = 5 }) {
  const repositories = await github.paginate(github.rest.repos.listForUser, {
    username,
    type: 'owner',
    sort: 'created',
    direction: 'desc',
    per_page: 100,
  });

  return repositories
    .filter((repo) => repo.private === false && !repo.fork)
    .slice(0, limit)
    .map((repo) => ({
      name: repo.full_name,
      url: repo.html_url,
      description: repo.description || '',
    }));
};
