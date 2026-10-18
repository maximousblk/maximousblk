module.exports = async function recentStars({ github, username, limit = 5 }) {
  const repositories = await github.paginate(github.rest.activity.listReposStarredByUser, {
    username,
    per_page: 100,
    sort: 'created',
    direction: 'desc',
  });

  return repositories
    .filter((repo) => repo.private === false)
    .slice(0, limit)
    .map((repo) => ({
      name: repo.full_name,
      url: repo.html_url,
      description: repo.description || '',
    }));
};
